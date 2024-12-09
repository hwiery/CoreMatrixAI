import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'MongoDB URI가 설정되지 않았습니다. .env 파일에 MONGODB_URI를 설정해주세요.'
  );
}

console.log('MongoDB URI exists:', !!MONGODB_URI);

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  try {
    console.log('Starting database connection...');
    
    if (cached.conn) {
      console.log('Using cached connection');
      return cached.conn;
    }

    if (!cached.promise) {
      const opts = {
        bufferCommands: false,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 45000,
        family: 4,
        retryWrites: true,
        retryReads: true,
        dbName: 'CoreMatrix'
      };

      console.log('Creating new connection...');
      cached.promise = mongoose.connect(MONGODB_URI, opts)
        .then((mongoose) => {
          console.log('MongoDB connected successfully');
          return mongoose;
        })
        .catch((error) => {
          console.error('MongoDB connection error:', error);
          cached.promise = null;
          throw error;
        });
    }

    try {
      cached.conn = await cached.promise;
      console.log('Connection established');
    } catch (e) {
      cached.promise = null;
      console.error("Database connection error:", e);
      throw e;
    }

    return cached.conn;
  } catch (error) {
    console.error('Fatal database connection error:', error);
    throw error;
  }
}

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB Atlas');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
  setTimeout(() => {
    console.log('Attempting to reconnect...');
    mongoose.connect(MONGODB_URI).catch(console.error);
  }, 5000);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB Atlas');
});

process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('Mongoose connection closed through app termination');
    process.exit(0);
  } catch (err) {
    console.error('Error closing mongoose connection:', err);
    process.exit(1);
  }
});

export default dbConnect;