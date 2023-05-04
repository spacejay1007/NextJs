import { getPosts } from "@/service/post";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const posts = await getPosts();
  return NextResponse.json(posts);
};
