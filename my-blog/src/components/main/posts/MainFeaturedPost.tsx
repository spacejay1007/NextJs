"use client";

import { getAllPosts, T_Post } from "@/service/post";
import PostList from "./list/PostList";

// export const MainFeaturedPost = async () => {
//   return (
//     <section>
//       <h2 className="font-bold text-lg">Featured Posts</h2>
//       <PostList />
//     </section>
//   );
// };

const MainFeaturedPost = async () => {
  const posts = await getAllPosts();
  console.log(posts);
  return (
    <div>
      <h2>Featured Posts</h2>
      <PostList />
    </div>
  );
};

export default MainFeaturedPost;
