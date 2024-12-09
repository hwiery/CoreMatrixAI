import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI 환경변수가 설정되지 않았습니다.');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      ...options,
      monitorCommands: true,
      serverSelectionTimeoutMS: 10000,
    });

    client.on('connectionReady', () => {
      console.log('MongoDB 연결 준비됨');
    });

    client.on('error', (error) => {
      
      console.error('MongoDB 연결 오류:', error);
    });

    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;