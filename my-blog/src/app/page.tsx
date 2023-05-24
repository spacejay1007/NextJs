import CarouselPost from "@/components/main/carouselPost/CarouselPost";
import MainFeaturedPost from "@/components/main/mainPost/MainFeaturedPost";
import { MainProfile } from "@/components/main/profile/MainProfile";

// const inter = Inter({ subsets: ["latin"] });
// {/* @ts-expect-error Async Server Component */}

export default function Home() {
  return (
    <>
      <MainProfile />
      {/* @ts-expect-error Async Server Component */}
      <MainFeaturedPost />
      {/* @ts-expect-error Async Server Component */}
      <CarouselPost />
    </>
  );
}
