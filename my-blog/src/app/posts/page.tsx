import { T_Post, getPosts } from "@/service/post";
import Image from "next/image";
import Link from "next/link";

const PostsPage = () => {
  const posts = getPosts();
  return (
    <div className="grid grid-cols-3 gap-3">
      <div>하이</div>
      {/* {posts.map((item: T_Post, idx: number) => {
        return (
          <Link href={`/posts/${item.id}`} key={idx} className="">
            <div className="rounded border-inherit border ">
              <Image src={"/image"} alt="image" width={430} height={300} />
              <div className="p-3">
                <div className="text-right text-sm">{item.date}</div>
                <div className="flex flex-col items-center">
                  <div>{item.title}</div>
                  <div>{item.desc}</div>
                  <div>{item.tag}</div>
                </div>
              </div>
            </div>
          </Link>
        );
      })} */}
    </div>
  );
};

export default PostsPage;
