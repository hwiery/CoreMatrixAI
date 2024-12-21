const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  company: String,
  project: String,
  period: String,
  title: String,
  description: { type: String, maxLength: 1000 }
});

const availabilitySchema = new mongoose.Schema({
  timezone: String,
  startTime: String,
  endTime: String
});

const languageProficiencySchema = new mongoose.Schema({
  language: String,
  level: String
});

const educationSchema = new mongoose.Schema({
  school: { type: String, required: true },
  degree: { type: String, required: true },
  major: { type: String, required: true },
  graduationYear: { type: String, required: true },
  status: { type: String, required: true },
  gpa: String
});

const userSchema = new mongoose.Schema({
  // 개인정보
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  nationality: { type: String, required: true },
  
  // SNS 계정
  snsAddresses: {
    type: [String],
    default: [],
    validate: [
      {
        validator: function(array) {
          // 배열인지 확인
          if (!Array.isArray(array)) return false;
          // 최대 5개까지만 허용
          if (array.length > 5) return false;
          // 각 항목이 비어있지 않은 문자열인지 확인
          return array.every(item => typeof item === 'string' && item.trim().length > 0);
        },
        message: 'SNS 주소는 최대 5개까지만 등록할 수 있으며, 각 주소는 비어있지 않아야 합니다.'
      }
    ]
  },
  
  // 학력 정보
  educations: [educationSchema],
  
  // 경험
  experiences: [experienceSchema],
  
  // 언어 능력
  languageProficiencies: [languageProficiencySchema],
  
  // 기술 스택
  skills: [String],
  
  // 근무 가능 시간
  weekdayAvailability: availabilitySchema,
  weekendAvailability: availabilitySchema,
  
  // 상태
  status: { type: String, default: 'active' }
}, {
  timestamps: { 
    createdAt: 'createdAt', 
    updatedAt: 'updatedAt' 
  },
  collection: 'users'
});

// SNS 주소 저장 전 처리
userSchema.pre('save', function(next) {
  // SNS 주소 배열에서 빈 문자열 제거
  if (Array.isArray(this.snsAddresses)) {
    this.snsAddresses = this.snsAddresses.filter(address => address && address.trim() !== '');
  }
  next();
});

// 이메일 중복 체크를 위한 인덱스
userSchema.index({ email: 1 }, { unique: true });

// 스키마 컴파일 전에 로깅 추가
console.log('Compiling User model...');

// 모델 컴파일 전에 기존 모델 확인
if (mongoose.models.User) {
  console.log('Using existing User model');
  module.exports = mongoose.models.User;
} else {
  console.log('Creating new User model');
  module.exports = mongoose.model('User', userSchema);
}