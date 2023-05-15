"use client";
import { T_Post } from "@/service/post";
import Image from "next/image";
import PostsCard from "../../post/PostsCard";

type Props = {
  posts: T_Post[];
};

const PostList: React.FC<Props> = ({ posts }): JSX.Element => {
  // console.log(getPosts());
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {posts.map((item: T_Post, idx: number) => (
        // eslint-disable-next-line react/jsx-key
        <PostsCard item={item} idx={idx} />
      ))}
    </div>
  );
};

export default PostList;
