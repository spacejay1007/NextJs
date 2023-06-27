"use client";
import React, { useState, useEffect } from "react";
import { Categories } from "../category/Categories";
import { T_Post } from "service/post";
import PostCard from "./PostCard";

export type SelectProps = {
  checked: boolean;
  id: number;
};

type Props = {
  posts: T_Post[];
  // posts: T_Post[];
  categories: string[];
};

export type Handler = {
  selected: { check: boolean; id: number };
  setSelected: (check: boolean, id: number) => void;
  data: (T_Post & { select: SelectProps })[];
  setData: (data: (T_Post & { select: SelectProps })[]) => void;
};

export const PostList = ({ posts, categories }: Props): JSX.Element => {
  const select = { checked: false, id: 0 };
  const newPosts = posts.map((item: T_Post) => {
    return { ...item, select };
  });

  const [data, setData] = useState(newPosts);
  const [selected, setSelected] = useState({ check: false, id: 0 });
  const [arr, setArr] = useState<(T_Post & { select: SelectProps })[]>([]);
  const [post, setPost] = useState("All Posts");

  /** 함수 - 김재용 - */
  const postList = () => {
    const categoryCheck = data.filter(
      (item: T_Post & { select: SelectProps }) => item.category === post
    );
    if (post === "All Posts") return data;

    return categoryCheck;
  };

  /** effect - 김재용 - */
  useEffect(() => {
    postList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // 체크 true 일때에 arr 에 true 인 데이터를 담아준다.
    if (selected.check) {
      const trueCheckData = data.filter((item) => item.id === selected.id);
      // console.log(trueCheckData);
      setArr([...arr, trueCheckData[0]]);
      // setArr
    } else {
      // 체크 false 일때에 arr 에 true 인 데이터만 남겨준다. false인 데이터 빼주는 작업
      if (arr.length !== 0) {
        const falseCheckData = data.filter(
          (item) => item.select.checked === true
        );
        setArr([...falseCheckData]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const handler: Handler = {
    selected,
    setSelected: (check: boolean, id: number) => setSelected({ check, id }),
    data,
    setData: (data: (T_Post & { select: SelectProps })[]) => setData(data),
  };

  return (
    <>
      <div>여기에 버튼 들어갈거야</div>
      <div className="flex m-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-30px min-w-500">
          {postList().map((item: T_Post & { select: SelectProps }) => {
            return <PostCard item={item} key={item.id} handler={handler} />;
          })}
        </div>
        <Categories categories={categories} setPost={setPost} post={post} />
      </div>
    </>
  );
};
