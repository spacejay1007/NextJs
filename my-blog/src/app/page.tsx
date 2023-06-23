// "use client";

import { MainProfile } from "components/main/about/MainProfile";
import CarouselPost from "components/main/carouselPost/CarouselPost";
import MainFeaturedPost from "components/main/mainPost/MainFeaturedPost";

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
