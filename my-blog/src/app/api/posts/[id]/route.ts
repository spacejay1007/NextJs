import { getAllPosts } from "@/service/post";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export const DELETE = async (req: Request) => {
  const { url } = await req; // 보내준 JSON 데이터를 받아 데이터를 담아준다.
  if (!url) return NextResponse.json({ message: "Missing Delete Id" });
  const id = Number(url.split("posts/")[1]);
  const filePath = path.join(process.cwd(), "public", "data", "post.json");

  const posts = await getAllPosts();
  const arr = [...posts];

  const newArr = arr.filter((item) => item.id !== id);
  writeFile(filePath, JSON.stringify(newArr, null, 4));

  return NextResponse.json({ message: "" });
};
