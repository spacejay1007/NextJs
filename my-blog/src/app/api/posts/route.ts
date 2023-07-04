import { readFile, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { getAllPosts } from "service/post";
import db from "lib/db/sqlDb";
import { newDate } from "common/commonFuc";
// import Post from "lib/schemas/posts";
import CompoundedSpace from "antd/es/space";
import excuteQuery from "lib/db/sqlDb";
import { MongoClient } from "mongodb";

export const GET = async (req: Request, res: Response) => {
  // const testPost = Test;
  // const allTests = await testPost.find({});
  // await connectMongoDB();
  // await connect();

  // try {
  //   console.log("req nom", req.body);
  //   const result = await excuteQuery({
  //     query: "INSERT INTO post(content) VALUES(?)",
  //     values: "",
  //   });
  //   console.log("ttt", result);
  // } catch (error) {
  //   console.log(error);
  // }

  // const db = mongoConnect.db();
  //
  const posts = await getAllPosts();
  return NextResponse.json(posts);
};

export const POST = async (req: Request, res: Response) => {
  const postData = await req.json(); // 보내준 JSON 데이터를 받아 데이터를 담아준다.
  console.log(postData);
  const client = await MongoClient.connect(process.env.MONGODB_URI || "");
  if (!postData) return NextResponse.json({ message: "Missing Data" });

  // const posts = Post;
  // console.log(posts);

  // mongoDB POST
  const db = client.db();

  const postsCollection = db.collection("posts");
  const result = await postsCollection.insertOne(postData);
  console.log(result);
  client.close();

  //
  // const postData = await req.json(); // 보내준 JSON 데이터를 받아 데이터를 담아준다.
  // // const testId = await getNextSequenceValue("testId");

  // // process.cwd() > 현재 경로
  // const filePath = path.join(process.cwd(), "public", "data", "post.json");
  // if (!postData) return NextResponse.json({ message: "Missing Data" });

  // const posts = await getAllPosts();

  // const newId = posts[0].id + 1;
  // const arr = [...posts];

  // const newPostData = { ...postData, ...{ id: newId, date: newDate() } };
  // arr.push(newPostData);
  // arr.sort((a, b) => (a.id > b.id ? -1 : 1));

  // writeFile(filePath, JSON.stringify(arr, null, 4));
  return NextResponse.json({ message: "" });
};
