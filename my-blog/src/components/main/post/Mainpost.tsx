import { getAllPosts, T_Post } from "@/service/post";
import { PostList } from "./postList/PostList";
import { useQuery } from "@tanstack/react-query";

type Props = {
  posts: T_Post[];
};

export const Mainpost = async () => {
  const posts = await getAllPosts();

  const dupPosts = [...new Set(posts.map((item: T_Post) => item.category))];

  return (
    <>
      <PostList posts={posts} categories={dupPosts} />
    </>
  );
};
