"use client";

import React from "react";
import { PostList } from "./list/PostList";

export const MainFeaturedPost: React.FC = (): JSX.Element => {
  return (
    <div>
      <div className="font-bold text-lg">Featured Posts</div>
      <PostList />
    </div>
  );
};
