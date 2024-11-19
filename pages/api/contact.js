import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('CoreMatrix');
      const contactsCollection = db.collection('contacts');

      const contactData = {
        ...req.body,
        createdAt: new Date()
      };

      const result = await contactsCollection.insertOne(contactData);

      res.status(201).json({ 
        message: '문의가 성공적으로 제출되었습니다.', 
        contactId: result.insertedId 
      });
    } catch (error) {
      console.error('MongoDB 저장 중 오류:', error);
      res.status(500).json({ 
        message: '문의 제출 중 서버 오류가 발생했습니다.', 
        error: error.message 
      });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}