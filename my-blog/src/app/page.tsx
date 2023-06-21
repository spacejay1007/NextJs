// "use client";
import CarouselPost from "@/components/main/carouselPost/CarouselPost";
import MainFeaturedPost from "@/components/main/mainPost/MainFeaturedPost";
import { MainProfile } from "@/components/main/about/MainProfile";
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "@/service/post";

// const inter = Inter({ subsets: ["latin"] });
// {/* @ts-expect-error Async Server Component */}

export default function Home() {
  // const queryClient = new QueryClient();
  // const posts = await getAllPosts();
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () =>
  //     fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
  //       (res) => res.json()
  //     ),
  // });
  return (
    // <QueryClientProvider client={queryClient}>
    <>
      <MainProfile />
      <MainFeaturedPost />
      {/* @ts-expect-error Async Server Component */}
      <CarouselPost />
    </>
    // </QueryClientProvider>
  );
}
