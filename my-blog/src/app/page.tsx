import Image from "next/image";
import { HomeContactButton } from "@/components/main/HomeContactButton";
import { T_Post } from "@/service/post";
import Link from "next/link";
import MainFeaturedPost from "@/components/main/posts/MainFeaturedPost";

// const inter = Inter({ subsets: ["latin"] });
// {/* @ts-expect-error Async Server Component */}

export default function Home() {
  // const posts = await getPosts();

  return (
    <div>
      <div className="w-full justify-center flex flex-col items-center">
        <Image
          className="rounded-full"
          src={
            "https://avatars.githubusercontent.com/u/89574010?s=400&u=fbea04d9aa33b9c0f384c1a54982c42621332f4a&v=4"
          }
          alt="JayImage"
          width={200}
          height={200}
        />

        <div className="text-lg font-bold mt-5">{`Hi, I'm Jay`}</div>
        <div>Front-End engineer</div>
        <div className="text-sm">
          My Stack : Javascript, TypeScript, React, NextJs
        </div>
        <HomeContactButton />
      </div>

      {/* <MainFeaturedPost /> */}

      {/* 
      <div className="font-bold text-lg">Featured Posts</div>
      <CtMainFeaturedPost />

      <div className="grid grid-cols-3 gap-3">
        {posts.map((item: T_Post, idx: number) => {
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
        })}
      </div>
     */}
    </div>
  );
}
