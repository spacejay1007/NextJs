// lib/db/dbConnect.ts
import mongoose, { Connection, ConnectionStates } from "mongoose";
import { Mongoose } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
// declare 로 타입 지정
declare global {
  // DB연결을 계속 시도 하는 것이 아닌 연길디 되면 global에 캐싱해서 사용하려고 하는것
  const mongoose: {
    promise: Promise<Mongoose> | null;
    connect: Mongoose | null;
  };
}

// const {} = process.env
// const DB_URI = process.env.MONGODB_URI || "";

// let cached = global.mongoose || "";

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   // if (cached.conn) return cached.conn;

//   mongoose
//     .connect(process.env.MONGODB_URI || "")
//     .catch((err) => console.log(err));

//   mongoose.connection.on("error", (err) => {
//     console.error("mongoDB error", err);
//   });

//   // if (!cached.promise) {
//   //   cached.promise = mongoose
//   //     .set({ debug: true, strictQuery: false })
//   //     .connect(`${DB_URI}`)
//   //     .then((mongoose) => mongoose);
//   // }

//   // cached.conn = await cached.promise;
//   // return cached.conn;
// }

// let connection = {
//   isConnected: true,
// };
export const dbConnect = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function
) => {
  // if (ConnectionStates.) {
  // return;
  // }
  const db = await mongoose.connect("mongocb://localhost:27017/jay_db");
  // connection.isConnected = db.connections[0].readyState;
  // if (!global.mongoose) {
  //   global.mongoose = await mongoose.connect(
  //     "mongocb://localhost:27017/jay_db"
  //   );
  // }
};

export default dbConnect;
