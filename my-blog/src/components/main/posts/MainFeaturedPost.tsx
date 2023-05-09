"use client";

import { PostList } from "./list/PostList";
import { T_Post, getPosts } from "@/service/post";

export const MainFeaturedPost = async () => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <section>
      <h2 className="font-bold text-lg">Featured Posts</h2>
      <PostList />
    </section>
  );
};
