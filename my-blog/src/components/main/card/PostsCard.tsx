"use client ";
import Image from "next/image";
import Link from "next/link";
import NoImg from "../../../../public/img/not_img.jpg";
import { T_Post } from "service/post";

type T_Props = {
  item: T_Post;
};

const PostsCard: React.FC<T_Props> = ({
  item: { category, date, desc, id, image, title },
}): JSX.Element => {
  return (
    <>
      <div>
        <Link href={`/posts/${id}`} key={id} className="">
          <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
            <Image
              src={!!image ? `/img/${image}` : NoImg}
              alt="image"
              width={300}
              height={200}
              className="w-full max-h-48"
              style={{ minHeight: 192 }}
            />
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
      </div>
    </>
  );
};

export default PostsCard;
