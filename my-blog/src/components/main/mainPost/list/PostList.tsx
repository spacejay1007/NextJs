"use client";

import { T_Post } from "@/service/post";
import PostsCard from "../../post/postList/PostsCard";

type Props = {
  posts: T_Post[];
};

const PostList: React.FC<Props> = ({ posts }): JSX.Element => {
  // console.log(getPosts());

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-30px">
        {posts.map((item: T_Post, idx: number) => (
          // eslint-disable-next-line react/jsx-key
          <PostsCard item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default PostList;
