"use client";
import { getPosts } from "@/service/post";
import Image from "next/image";

export const PostList = () => {
  // console.log(getPosts());
  return (
    <div className="rounded border-inherit border ">
      <Image src={"/image"} alt="image" width={200} height={200} />
      <div>날짜</div>
      <div>title</div>
      <div>desc</div>
    </div>
  );
};
