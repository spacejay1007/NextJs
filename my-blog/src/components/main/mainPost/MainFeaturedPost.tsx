"use client";

import PostList from "./list/PostList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loading } from "common/components/loading/Loading";
import { T_Post } from "service/post";

const MainFeaturedPost = () => {
  const { isLoading, error, data } = useQuery<T_Post[]>({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("/api/posts", { method: "GET" }).then((res) => res.json()),
  });

  if (isLoading || !data) return <Loading />;

  return (
    <div className="">
      <h2 className="text-2xl font-bold my-2">Featured Posts</h2>
      <PostList posts={data} />
    </div>
  );
};

export default MainFeaturedPost;
