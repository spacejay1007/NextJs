import { getAllPosts } from "@/service/post";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const posts = await getAllPosts();
  return NextResponse.json(posts);
};
