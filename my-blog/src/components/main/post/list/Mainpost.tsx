"use client";
import { T_Post } from "@/service/post";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PostsCard from "../PostsCard";

export const Mainpost: React.FC = (): JSX.Element => {
  const posts = require("../../../../../public/data/post.json");
  const [post, setPost] = useState("");
  const dupPosts = posts.filter((item: T_Post, idx: number, arr: T_Post[]) => {
    return (
      arr.findIndex((arrItem) => item.category === arrItem.category) === idx
    );
  });

  const postList = () => {
    const categoryCheck = posts.filter(
      (item: T_Post) => item.category === post
    );
    if (post === "") return posts;

    console.log(categoryCheck);
    return categoryCheck;
  };

  return (
    <div className="flex ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {postList().map((item: T_Post, idx: number) => {
          // eslint-disable-next-line react/jsx-key
          return <PostsCard item={item} idx={idx} />;
        })}
      </div>

      <div className="">
        <div>category</div>

        <div
          onClick={() => {
            setPost("");
          }}
        >
          all
        </div>

        {dupPosts.map((item: T_Post, idx: number) => {
          return (
            <div key={item.id + idx + item.category}>
              <div
                onClick={() => {
                  setPost(item.category);
                }}
              >
                {item.category}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
