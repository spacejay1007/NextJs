import { readFile, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { getAllPosts } from "service/post";
import { newDate } from "common/commonFuc";
// import dbConnect from "lib/db/dbConnect";
// import Test from "lib/test/test.model";

export const GET = async (req: Request) => {
  // dbConnect();
  // const testPost = Test;
  // const allTests = await testPost.find({});

  const posts = await getAllPosts();
  return NextResponse.json(posts);
  // return NextResponse.json(allTests);
};

export const POST = async (req: Request, res: Response) => {
  // dbConnect();
  // const testPost = Test;

  const postData = await req.json(); // 보내준 JSON 데이터를 받아 데이터를 담아준다.
  // const testId = await getNextSequenceValue("testId");

  // // process.cwd() > 현재 경로
  // const filePath = path.join(process.cwd(), "public", "data", "post.json");
  if (!postData) return NextResponse.json({ message: "Missing Data" });

  // const posts = await getAllPosts();

  // const newId = posts[0].id + 1;
  // const arr = [...posts];

  // const newPostData = { ...postData, ...{ id: newId, date: newDate() } };
  // arr.push(newPostData);
  // arr.sort((a, b) => (a.id > b.id ? -1 : 1));

  // writeFile(filePath, JSON.stringify(arr, null, 4));
  return NextResponse.json({ message: "" });
};
