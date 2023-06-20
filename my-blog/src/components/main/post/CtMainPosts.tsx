import { getAllPosts } from "@/service/post";
import { Mainpost } from "./Mainpost";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/build/lib/devtools";

export const CtMainPosts = async () => {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Mainpost />
    </>
  );
};
