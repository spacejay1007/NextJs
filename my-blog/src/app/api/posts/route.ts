import { readFile, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { getAllPosts } from "service/post";
// import Post from "lib/schemas/posts";
import { MongoClient } from "mongodb";
import { QueryError, createConnection } from "mysql2";
import { NextApiRequest, NextApiResponse } from "next";
import { posts } from "lib/schemas/posts";

export const GET = async (req: Request, res: Response) => {
  // const testPost = Test;
  // const allTests = await posts.findAll({});
  // await connectMongoDB();
  // await connect();

  // const db = mongoConnect.db();
  //
  const sqlConnect = await createConnection({
    host: "localhost",
    // host: process.env.MYSQL_HOST,
    // port: process.env.MYSQL_PORT,
    user: process.env.SQL_USER,
    password: process.env.SQL_PW,
    database: "nodejs",
  });
  // const queryString =

  sqlConnect.query(
    "SELECT * FROM nodejs.posts",
    (err: QueryError, result: any) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        // NextResponse.json(result);
        sqlConnect.end();
        return NextResponse.json(result);
      }
    }
  );
  // const posts = await getAllPosts();
  // console.log(postsss);
  return NextResponse.json("");
};

export const POST = async (req: Request, res: Response) => {
  const postData = await req.json(); // 보내준 JSON 데이터를 받아 데이터를 담아준다.
  // const client = await MongoClient.connect(process.env.MONGODB_URI || "");
  if (!postData) return NextResponse.json({ message: "Missing Data" });

  // const posts = Post;
  // console.log(posts);

  // mongoDB POST
  const client = await MongoClient.connect(process.env.MONGODB_URI || "");
  const db = client.db();

  const postsCollection = db.collection("posts");
  const result = await postsCollection.insertOne(postData);
  console.log(result);
  client.close();

  // // MySQL POST
  // const sqlConnect = await createConnection({
  //   host: "localhost",
  //   // host: process.env.MYSQL_HOST,
  //   // port: process.env.MYSQL_PORT,
  //   user: process.env.SQL_USER,
  //   password: process.env.SQL_PW,
  //   database: "nodejs",
  // });

  // sqlConnect.query("SELECT * FROM posts", function (err: any, result: any) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     // console.log(result);
  //     // res.json(result);
  //   }
  // });

  // const sqlDb = sqlConnect.query

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
