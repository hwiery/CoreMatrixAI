import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';

export default async function handler(req, res) {
  console.log('API handler started');
  
  console.log('Content-Type:', req.headers['content-type']);
  
  if (req.method !== 'POST') {
    console.log(`Invalid method: ${req.method}`);
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  if (!req.headers['content-type']?.includes('application/json')) {
    return res.status(400).json({ 
      message: 'Content-Type must be application/json' 
    });
  }

  try {
    // DB 연결 시도
    console.log('Attempting database connection...');
    await dbConnect().catch(error => {
      console.error('Database connection failed:', error);
      throw new Error('Database connection failed');
    });
    console.log('Database connected successfully');

    console.log('Raw request body:', req.body);
    const userData = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    console.log('Request body:', req.body);
    console.log('Parsed user data:', JSON.stringify(userData, null, 2));

    // 필수 필드 검증 (university 제거하고 educations 추가)
    const requiredFields = ['name', 'email', 'phone', 'nationality'];
    const missingFields = requiredFields.filter(field => !userData[field]);
    
    // 교육 정보 필수 필드 검증
    if (!userData.educations || userData.educations.length === 0) {
      missingFields.push('educations');
    } else {
      const educationRequired = ['school', 'degree', 'major', 'graduationYear', 'status'];
      const firstEducation = userData.educations[0];
      educationRequired.forEach(field => {
        if (!firstEducation || !firstEducation[field]) {
          missingFields.push(`educations.${field}`);
        }
      });
    }
    
    if (missingFields.length > 0) {
      console.log('Missing required fields:', missingFields);
      return res.status(400).json({
        message: `다음 필수 항목이 누락되었습니다: ${missingFields.join(', ')}`
      });
    }

    // 이메일 중복 체크
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      console.log('Duplicate email found:', userData.email);
      return res.status(400).json({ message: '이미 등록된 이메일입니다.' });
    }

    // 데이터 제제
    const sanitizedData = {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      nationality: userData.nationality,
      snsAccounts: userData.snsAccounts || [],
      
      // 교육 정보를 배열로 처리
      educations: userData.educations || [],
      
      // 기타 정보
      experiences: userData.experiences || [],
      languageProficiencies: userData.languageProficiencies || [],
      skills: userData.skills || [],
      weekdayAvailability: userData.weekdayAvailability || {},
      weekendAvailability: userData.weekendAvailability || {},
      
      // 상태 정보
      status: 'active'
    };

    console.log('Attempting to save user with data:', JSON.stringify(sanitizedData, null, 2));

    // 데이터 저장 시도 전 로그
    console.log('Preparing to save user data...');
    
    const user = new User(sanitizedData);
    console.log('User model created');
    
    try {
      await user.save();
      console.log('User saved successfully:', user._id);
    } catch (saveError) {
      console.error('Error saving user:', saveError);
      throw saveError;
    }

    return res.status(201).json({
      message: '성공적으로 등록되었습니다.',
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Registration error:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      details: error
    });
    
    // 더 자세한 에러 응답
    return res.status(500).json({
      message: '서버 오류가 발생했습니다.',
      error: process.env.NODE_ENV === 'development' ? {
        message: error.message,
        type: error.name,
        details: error.toString()
      } : '서버 오류가 발생했습니다.'
    });
  }
}