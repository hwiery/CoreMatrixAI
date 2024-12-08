import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      if (!client) {
        throw new Error('MongoDB 연결에 실패했습니다.');
      }

      const db = client.db('CoreMatrix');
      const contactsCollection = db.collection('contacts');

      const { fullName, email, mobile, message } = req.body;
      if (!fullName || !email || !mobile || !message) {
        return res.status(400).json({
          message: '필수 필드가 누락되었습니다.'
        });
      }

      const result = await contactsCollection.insertOne({
        ...req.body,
        createdAt: new Date(),
        status: 'new'
      });

      res.status(201).json({
        success: true,
        message: '문의가 성공적으로 제출되었습니다.',
        contactId: result.insertedId
      });
    } catch (error) {
      console.error('MongoDB 오류:', error);
      res.status(500).json({
        success: false,
        message: '서버 오류가 발생했습니다.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}