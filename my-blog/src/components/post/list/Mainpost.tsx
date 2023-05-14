"use client";
import { T_Post } from "@/service/post";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Mainpost: React.FC = (): JSX.Element => {
  const posts = require("../../../../public/data/post.json");
  const [post, setPost] = useState("all");
  // console.log(post);
  const postList = () => {
    if (post === "javascript") {
      return posts.filter((item: T_Post) => item.category === "javascript");
    }

    if (post === "typescript") {
      return posts.filter((item: T_Post) => item.category === "typescript");
    }
    return posts;
  };

  useEffect(() => {
    postList();
  }, [post]);
  return (
    <div>
      <div className="flex">
        <div className="grid grid-cols-3 gap-3">
          {postList().map((item: T_Post, idx: number) => {
            return (
              <Link href={`/posts/${item.id}`} key={idx} className="">
                <div className="rounded border-inherit border ">
                  <Image src={"/image"} alt="image" width={430} height={300} />
                  <div className="p-3">
                    {/* <div className="text-right text-sm">{}</div> */}
                    <div className="flex flex-col items-center">
                      <div>{item.title}</div>
                      <div>{item.desc}</div>
                      <div>{item.category}</div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div>
          <div>category</div>
          <div
            onClick={() => {
              setPost("all");
            }}
          >
            all
          </div>
          <div
            onClick={() => {
              setPost("javascript");
            }}
          >
            Javascript
          </div>
          <div
            onClick={() => {
              setPost("typescript");
            }}
          >
            Typescript
          </div>
        </div>
      </div>
    </div>
  );
};
