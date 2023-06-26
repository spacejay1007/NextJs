import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

// const options = {}
if (!URI) throw new Error("Please add your mongo URI");

// let client = new MongoClient(URI, options);
// let clientPromise

// if(process.env.NODE_ENV !== "production") {
//   if(!global._mongoClientPromise) {
//     global._mongoClientPromise = client.connect();
//   }
// }

export const connectMongoDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }

  return await mongoose.connect(URI);
};
