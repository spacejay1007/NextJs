"use client";
import { Mainpost } from "./Mainpost";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

export const CtMainPosts = () => {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Mainpost />
    </>
  );
};
