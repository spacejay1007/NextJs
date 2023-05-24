import { T_Post, getAllPosts } from "@/service/post";
import PostList from "./list/PostList";

const MainFeaturedPost = async () => {
  const posts = await getAllPosts();
  // const posts = require("../../../../public/data/post.json");

  return (
    <div className="">
      <h2 className="text-2xl font-bold my-2">Featured Posts</h2>
      <PostList posts={posts} />
    </div>
  );
};

export default MainFeaturedPost;
