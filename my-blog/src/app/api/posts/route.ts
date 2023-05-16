import { getAllPosts } from "@/service/post";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const posts = await getAllPosts();
  return NextResponse.json(posts);
};

export const POST = async (req: Request, res: Response) => {
  // const
  // return NextRequest.json
};
