import { getAllPosts } from "@/service/post";
import { Mainpost } from "./Mainpost";

export const CtMainPosts = async () => {
  const posts = await getAllPosts();

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Mainpost />
    </>
  );
};
