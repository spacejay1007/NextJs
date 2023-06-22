// "use client";
import CarouselPost from "@/components/main/carouselPost/CarouselPost";
import MainFeaturedPost from "@/components/main/mainPost/MainFeaturedPost";
import { MainProfile } from "@/components/main/about/MainProfile";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "@/service/post";

// {/* @ts-expect-error Async Server Component */}

export default function Home() {
  return (
    <>
      <MainProfile />
      <MainFeaturedPost />
      {/* @ts-expect-error Async Server Component */}
      <CarouselPost />
    </>
  );
}
