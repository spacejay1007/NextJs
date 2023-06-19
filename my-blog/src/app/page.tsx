import CarouselPost from "@/components/main/carouselPost/CarouselPost";
import MainFeaturedPost from "@/components/main/mainPost/MainFeaturedPost";
import { MainProfile } from "@/components/main/about/MainProfile";
// import { QueryClientProvider, QueryClient, Hydrate } from "react-query";

// const inter = Inter({ subsets: ["latin"] });
// {/* @ts-expect-error Async Server Component */}

export default function Home() {
  // const queryClient = new QueryClient();
  return (
    // <QueryClientProvider client={queryClient}>
    //   <Hydrate>
    <>
      <MainProfile />
      {/* @ts-expect-error Async Server Component */}
      <MainFeaturedPost />
      {/* @ts-expect-error Async Server Component */}
      <CarouselPost />
    </>
    //   </Hydrate>
    // </QueryClientProvider>
  );
}
