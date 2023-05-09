"use client ";
import { getPosts, T_Post } from "@/service/post";
import Image from "next/image";
import Link from "next/link";

const PostsCard: React.FC = (): JSX.Element => {
  // const getPost = await getPosts();
  return (
    <div className="grid grid-cols-3 gap-3">
      {/* {posts.map((item: T_Post, idx: number) => {
        return (
          <Link href={`/posts/${item.id}`} key={idx} className="">
            <div className="rounded border-inherit border">
              <Image src={"/image"} alt="image" width={430} height={300} />
              <div>{item.date}</div>
              <div>{item.title}</div>
              <div>{item.desc}</div>
            </div>
          </Link>
        );
      })} */}
    </div>
  );
};

export default PostsCard;
