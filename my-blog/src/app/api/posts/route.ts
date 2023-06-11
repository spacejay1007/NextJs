import { T_Post, getAllPosts } from "@/service/post";
import { readFile, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { newDate } from "@/common/commonFuc";

export const GET = async (req: Request) => {
  const posts = await getAllPosts();
  return NextResponse.json(posts);
};

export const POST = async (req: Request, res: Response) => {
  const postData = await req.json(); // 보내준 JSON 데이터를 받아 데이터를 담아준다.
  // process.cwd() > 현재 경로
  const filePath = path.join(process.cwd(), "public", "data", "post.json");
  if (!postData) return NextResponse.json({ message: "Missing Data" });

  const posts = await getAllPosts();

  const newId = posts[0].id + 1;
  const arr = [...posts];

  const newPostData = { ...postData, ...{ id: newId, date: newDate() } };
  arr.push(newPostData);
  arr.sort((a, b) => (a.id > b.id ? -1 : 1));

  writeFile(filePath, JSON.stringify(arr, null, 4));
  return NextResponse.json({ message: "" });
};

export const DELETE = async (req: Request) => {
  const postData = await req.json(); // 보내준 JSON 데이터를 받아 데이터를 담아준다.
  const filePath = path.join(process.cwd(), "public", "data", "post.json");
  if (!postData) return NextResponse.json({ message: "Missing Data" });

  // if (!postDelete) return NextResponse.json({ message: "Missing Data" });

  return NextResponse.json({ message: "" });
};
