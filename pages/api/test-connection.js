import dbConnect from '../../utils/dbConnect';

export default async function handler(req, res) {
  try {
    await dbConnect();
    res.status(200).json({ message: 'Database connected successfully' });
  } catch (error) {
    console.error('Database connection test failed:', error);
    res.status(500).json({ error: error.message });
  }
} 