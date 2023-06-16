"use client";
import { T_Post } from "@/service/post";
import React from "react";
import { useRouter, redirect } from "next/navigation";
import { PrevNext } from "./PrevNext";
import axios from "axios";

export const DetailPage = async ({
  post,
  prevNextPosts,
}: {
  post: T_Post;
  prevNextPosts: { prev: T_Post; next: T_Post };
}) => {
  const router = useRouter();

  const deleteHandler = async (id: number) => {
    await axios.delete(`/api/posts/${id}`).then((res) => {
      console.log(res);
      if (res.status === 200) {
        router.push("/");
      }
    });
  };

  return (
    <div>
      <div>
        <button onClick={() => deleteHandler(post.id as number)}>
          post삭제
        </button>
      </div>
      {post && (
        <>
          <div>{post.image}</div>
          <div>{post.title}</div>
          <div>{post.desc}</div>
        </>
      )}
      <div style={{ display: "flex" }}>
        <PrevNext post={prevNextPosts.prev} type={"prev"} />
        <PrevNext post={prevNextPosts.next} type={"next"} />
      </div>
    </div>
  );
};
