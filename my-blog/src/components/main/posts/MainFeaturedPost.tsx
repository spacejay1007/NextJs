"use client";

import { getAllPosts, T_Post } from "@/service/post";
import PostList from "./list/PostList";

const MainFeaturedPost = async () => {
  const posts = await getAllPosts();

  return (
    <div>
      <h2>Featured Posts</h2>
      <PostList posts={posts} />
    </div>
  );
};

export default MainFeaturedPost;
