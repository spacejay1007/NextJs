import { Mainpost } from "@/components/main/post/Mainpost";
import { T_Post } from "@/service/post";
import Image from "next/image";
import Link from "next/link";

const PostsPage = () => {
  // const posts = getPosts();

  return (
    <div>
      <div>하이</div>
      {/* @ts-expect-error Async Server Component */}
      <Mainpost />
    </div>
  );
};

export default PostsPage;
