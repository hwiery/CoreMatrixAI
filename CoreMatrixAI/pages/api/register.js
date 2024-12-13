import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // DB 연결 시도
    console.log('Connecting to database...');
    await dbConnect();
    console.log('Connected to database successfully');

    const userData = req.body;
    console.log('Received user data:', JSON.stringify(userData, null, 2));

    // 필수 필드 검증
    const requiredFields = ['name', 'email', 'phone', 'nationality', 'university', 'status'];
    const missingFields = requiredFields.filter(field => !userData[field]);
    
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

    // 데이터 정제
    const sanitizedData = {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      nationality: userData.nationality,
      snsAccounts: userData.snsAccounts || [],
      university: userData.university,
      schoolLevel: userData.schoolLevel,
      major: userData.major,
      year: userData.year,
      gpa: userData.gpa,
      status: userData.status,
      experiences: userData.experiences || [],
      languageProficiencies: userData.languageProficiencies || [],
      skills: userData.skills || [],
      weekdayAvailability: userData.weekdayAvailability || {},
      weekendAvailability: userData.weekendAvailability || {}
    };

    console.log('Attempting to save user with data:', JSON.stringify(sanitizedData, null, 2));

    // 사용자 데이터 생성
    const user = new User(sanitizedData);
    await user.save();

    console.log('User saved successfully:', user._id);

    return res.status(201).json({
      message: '성공적으로 등록되었습니다.',
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Registration error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    return res.status(500).json({
      message: '서버 오류가 발생했습니다.',
      error: process.env.NODE_ENV === 'development' ? {
        message: error.message,
        type: error.name
      } : undefined
    });
  }
}