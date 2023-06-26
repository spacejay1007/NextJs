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
  checked: boolean;
  setChecked: (check: boolean, id: number) => void;
};

export const PostList = ({ posts, categories }: Props): JSX.Element => {
  const [checkState, setCheckState] = useState([{ check: false, id: 0 }]);
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState({ check: false, id: 0 });
  const [post, setPost] = useState("All Posts");

  const check = { checked: false, id: 0 };
  // const posts: T_Post & { check: CheckProps } = { ...post, check };
  const newPosts = posts.map((item: T_Post) => {
    if (checked.check) console.log("sfsdf");

    return { ...item, check };
  });

  /** 함수 - 김재용 - */
  const postList = () => {
    const categoryCheck = newPosts.filter(
      (item: T_Post & { check: CheckProps }) => item.category === post
    );
    if (post === "All Posts") return newPosts;

    return categoryCheck;
  };

  /** effect - 김재용 - */
  useEffect(() => {
    // postList();
    // setData([...newPosts])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCheckState([...checkState, checked]);
    console.log(checkState);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

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
                checked={checked}
                setChecked={setChecked}
              />
            );
          })}
        </div>
        <Categories categories={categories} setPost={setPost} post={post} />
      </div>
    </>
  );
};
