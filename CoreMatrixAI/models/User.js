import mongoose from 'mongoose';

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

const userSchema = new mongoose.Schema({
  // 개인정보
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  nationality: { type: String, required: true },
  
  // SNS 계정
  snsAccounts: [String],
  
  // 학력 정보
  university: { type: String, required: true },
  schoolLevel: String,
  major: String,
  year: String,
  gpa: String,
  status: { type: String, required: true },
  
  // 경험
  experiences: [experienceSchema],
  
  // 언어 능력
  languageProficiencies: [languageProficiencySchema],
  
  // 기술 스택
  skills: [String],
  
  // 근무 가능 시간
  weekdayAvailability: availabilitySchema,
  weekendAvailability: availabilitySchema,
  
  // 메타 데이터
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// 이메일 중복 체크를 위한 인덱스
userSchema.index({ email: 1 }, { unique: true });

export default mongoose.models.User || mongoose.model('User', userSchema);