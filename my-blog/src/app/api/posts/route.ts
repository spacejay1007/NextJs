import { T_Post, getAllPosts } from "@/service/post";
import { readFile, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export const GET = async (req: Request) => {
  const posts = await getAllPosts();
  return NextResponse.json(posts);
};

export const POST = async (req: Request, res: Response) => {
  const postData = await req.json();
  const filePath = path.join(process.cwd(), "public", "data", "post.json");
  if (!postData) return NextResponse.json({ message: "Missing Data" });

  const posts = await getAllPosts();
  const arr = [...posts];
  arr.push(postData);
  arr.sort((a, b) => (a.id > b.id ? -1 : 1));

  writeFile(filePath, JSON.stringify(arr));
  return NextResponse.json({ message: "" });
};
