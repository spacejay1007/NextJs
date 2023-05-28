"use client";
import { T_Post } from "@/service/post";
import axios from "axios";
import React from "react";

export const PrevNext = async ({ post }: { post: T_Post }) => {
  const deleteHandler = async () => {
    await axios.delete("/api/posts").then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <div>
        <button onClick={() => deleteHandler()}>post삭제</button>
      </div>
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
