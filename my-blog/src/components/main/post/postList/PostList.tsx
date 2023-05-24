"use client";
import { T_Post } from "@/service/post";
import React, { useState } from "react";
import { Categories } from "../category/Categories";
import PostsCard from "./PostsCard";

type Props = {
  posts: T_Post[];
  categories: string[];
};
export const PostList = ({ posts, categories }: Props): JSX.Element => {
  const [post, setPost] = useState("All Posts");

  const postList = () => {
    const categoryCheck = posts.filter(
      (item: T_Post) => item.category === post
    );
    if (post === "All Posts") return posts;

    return categoryCheck;
  };
  return (
    <div className="flex m-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-30px min-w-500">
        {postList().map((item: T_Post) => {
          return <PostsCard item={item} key={item.id} />;
        })}
      </div>
      <Categories categories={categories} setPost={setPost} post={post} />
    </div>
  );
};
