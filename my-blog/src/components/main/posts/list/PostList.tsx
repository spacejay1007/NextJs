"use client";
import { T_Post } from "@/service/post";
import Image from "next/image";

type Props = {
  posts: T_Post[];
};

const PostList: React.FC<Props> = ({ posts }): JSX.Element => {
  // console.log(getPosts());
  return (
    <div className="grid grid-cols-3 gap-3">
      {posts.map((item) => (
        <div key={item.id} className="rounded border-inherit border ">
          <Image src={"/image"} alt="image" width={200} height={200} />
          <div>{item.title}</div>
          <div>{item.category}</div>
          <div>{item.desc}</div>
        </div>
      ))}
    </div>
    // <div className="rounded border-inherit border ">
    //   <Image src={"/image"} alt="image" width={200} height={200} />
    //   <div>날짜</div>
    //   <div>title</div>
    //   <div>desc</div>
    // </div>
  );
};

export default PostList;
