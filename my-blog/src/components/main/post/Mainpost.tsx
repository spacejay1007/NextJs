import { T_Post, getAllPosts } from "service/post";
import { PostList } from "./postList/PostList";

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
