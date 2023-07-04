"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { T_Post } from "service/post";
import NoImg from "../../../../../public/img/not_img.jpg";

export const PrevNext = ({
  post,
  type,
}: {
  // post: { postId: number; postTitle: string; image: string };
  post: T_Post;
  type: "prev" | "next";
}) => {
  const { id, desc, image, title } = post;

  return (
    // <div style={{ width: "50%", border: "1px solid black" }}>
    <>
      {post.id === null ? (
        <div>빈페이지</div>
      ) : (
        <Link
          href={`/posts/${id}`}
          style={{ position: "relative", width: "100%" }}
        >
          <Image
            src={image ? `/img/${image}` : NoImg}
            alt={title}
            width={100}
            height={100}
            style={{ width: "100%", height: 30, opacity: "40%" }}
          ></Image>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            {type === "prev" && <FaArrowLeft />}
            <div style={{ width: "100%" }}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
            {type === "next" && <FaArrowRight />}
          </div>
        </Link>
      )}
    </>
  );
};
