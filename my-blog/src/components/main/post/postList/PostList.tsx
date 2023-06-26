"use client";
import React, { useState, useEffect } from "react";
import { Categories } from "../category/Categories";
import { T_Post } from "service/post";
import PostCard from "./PostCard";

export type CheckProps = {
  checked: boolean;
  id: number;
};

type Props = {
  posts: T_Post[];
  // posts: T_Post[];
  categories: string[];
};

export type Handler = {
  checks: { check: boolean; id: number };
  setChecks: (check: boolean, id: number) => void;
};

export const PostList = ({ posts, categories }: Props): JSX.Element => {
  const check = { checked: false, id: 0 };
  // const posts: T_Post & { check: CheckProps } = { ...post, check };
  const newPosts = posts.map((item: T_Post) => {
    return { ...item, check };
  });

  const [data, setData] = useState(newPosts);
  const [checks, setChecks] = useState({ check: false, id: 0 });

  const [post, setPost] = useState("All Posts");

  /** 함수 - 김재용 - */
  const postList = () => {
    const categoryCheck = data.filter(
      (item: T_Post & { check: CheckProps }) => item.category === post
    );
    if (post === "All Posts") return newPosts;

    return categoryCheck;
  };

  /** effect - 김재용 - */
  useEffect(() => {
    postList();
    // setData([...newPosts])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const idFiltering = (checked: boolean, filterId: number) => {
    data.filter((item) => {
      if (item.id === filterId) {
        item.check.checked = checked;
      }
      item;
    });
  };

  useEffect(() => {
    console.log(idFiltering(checks.check, checks.id));
    // setCheckState([...checkState, checked]);
    // console.log(checkState);
    // if(checks.id === )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checks]);

  const handler: Handler = {
    checks,
    setChecks: (check: boolean, id: number) => setChecks({ check, id }),
  };

  console.log(checks);
  return (
    <>
      <div>여기에 버튼 들어갈거야</div>
      <div className="flex m-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-30px min-w-500">
          {postList().map((item: T_Post & { check: CheckProps }) => {
            return (
              <PostCard
                item={item}
                key={item.id}
                handler={handler}
                // checked={checked}
                // setChecked={setChecked}
              />
            );
          })}
        </div>
        <Categories categories={categories} setPost={setPost} post={post} />
      </div>
    </>
  );
};
