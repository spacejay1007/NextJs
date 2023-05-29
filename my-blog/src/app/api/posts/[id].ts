import { NextResponse } from "next/server";

export const DELETE = async (req: Request) => {
  // const { method, json } = req;
  // console.log(method, json);
  const postDelete = await req.json();
  console.log(postDelete);
  // const filePath = path.join(process.cwd(), "public", "data", "post.json");

  // if (!postDelete) return NextResponse.json({ message: "Missing Data" });

  return NextResponse.json({ message: "" });
};
