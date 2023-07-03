// lib/db/dbConnect.ts
import mongoose, { Connection, ConnectionStates } from "mongoose";
import { Mongoose } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
// declare 로 타입 지정
// declare global {
//   // DB연결을 계속 시도 하는 것이 아닌 연길디 되면 global에 캐싱해서 사용하려고 하는것
//   const mongoose: {
//     promise: Promise<Mongoose> | null;
//     connect: Mongoose | null;
//   };
// }

declare const mongoo: {
  promise: Promise<Mongoose> | null;
  connect: Mongoose | null;
};

const {} = process.env;
const DB_URI = process.env.MONGODB_URI || "";
let cached = mongoo || "";

if (!cached) {
  cached = { connect: null, promise: null };
}

async function dbConnect() {
  mongoose
    .connect(process.env.MONGODB_URI || "")
    .catch((err) => console.log(err));

  mongoose.connection.on("error", (err) => {
    console.error("mongoDB error", err);
  });

  if (!cached.promise) {
    cached.promise = mongoose
      .set({ debug: true, strictQuery: false })
      .connect(`${DB_URI}`)
      .then((mongoose) => mongoose);
  }
  console.log(cached.connect);

  cached.connect = await cached.promise;
  return cached.connect;
}

export default dbConnect;
