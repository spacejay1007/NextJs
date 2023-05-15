"use client ";
import { T_Post } from "@/service/post";
import Image from "next/image";
import Link from "next/link";

type T_Props = {
  item: T_Post;
  idx: number;
};

const PostsCard: React.FC<T_Props> = ({
  item: { category, date, desc, id, image, title },
  idx,
}): JSX.Element => {
  // const getPost = await getPosts();
  return (
    <Link href={`/posts/${id}`} key={idx + id} className="">
      <article className="rounded-md overflow-hidden shadow-lg  ">
        <Image
          src={`/img/${image}`}
          alt="image"
          width={430}
          height={300}
          className="w-full"
        />
        {/* <div className="text-right text-sm">{}</div> */}
        <div className="flex flex-col items-center p-4">
          {/* date형식은 바로 넣질 못하고 toString() 으로 정의해줘야한다. */}
          <div className="self-end">{date.toString()}</div>
          <div className="text-lg font-bold">{title}</div>
          {/* truncate === whiteSpace(...) , width 정의해줘야함*/}
          <div className="w-full truncate text-center">{desc}</div>
          <div className="text-sm rounded-lg bg-green-100 px-2 m">
            {category}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostsCard;
