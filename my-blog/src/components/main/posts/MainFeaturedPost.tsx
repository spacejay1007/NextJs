"use client";

import React from "react";
import { PostList } from "./list/PostList";
import { T_Post, getPosts } from "@/service/post";

export const MainFeaturedPost = async () => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div>
      <div className="font-bold text-lg">Featured Posts</div>
      <PostList />
    </div>
  );
};
