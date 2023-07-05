"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { PrevNext } from "./PrevNext";
import axios from "axios";
import { T_Post } from "service/post";
import { MarkdownViewr } from "./markdown/MarkdownViewr";
import "./DetailPage.scss";

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
      if (res.status === 200) {
        router.push("/posts");
        location.reload();
      }
    });
  };

  return (
    <div className="post__detail__wrapper">
      <div className="post__detail__btn__wrap">
        <button onClick={() => deleteHandler(post.id as number)}>
          post삭제
        </button>
      </div>
      <div className="post__detail__text__wrap">
        {post && (
          <>
            {/* <div>{post.image}</div> */}
            {/* <div>{post.title}</div> */}
            {/* <div>{post.desc}</div> */}
            <MarkdownViewr content={post.desc} />
          </>
        )}
      </div>

      <div className="post__detail__prev__next__btn__wrap">
        {prevNextPosts.prev ? (
          <PrevNext post={prevNextPosts.prev} type={"prev"} />
        ) : (
          <div className="prev__btn__no_data">넘길 페이지 없음</div>
        )}

        {prevNextPosts.next ? (
          <PrevNext post={prevNextPosts.next} type={"next"} />
        ) : (
          <div style={{ width: "50%", height: "100%" }}>넘길 페이지 없음</div>
        )}
      </div>
    </div>
  );
};
