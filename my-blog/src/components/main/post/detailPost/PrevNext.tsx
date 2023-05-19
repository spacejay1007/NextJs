import { T_Post } from "@/service/post";
import React from "react";

export const PrevNext = async ({ post }: { post: T_Post }) => {
  return (
    <div>
      {post && (
        <>
          <div>{post.image}</div>
          <div>{post.title}</div>
          <div>{post.desc}</div>
        </>
      )}
    </div>
  );
};
