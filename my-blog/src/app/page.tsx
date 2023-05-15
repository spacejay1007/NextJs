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
    <div className="h-full">
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
      {/* @ts-expect-error Async Server Component */}
      <MainFeaturedPost />
    </div>
  );
}
