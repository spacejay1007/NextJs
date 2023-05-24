import { PrevNext } from "@/components/main/post/detailPost/PrevNext";
import { getAllPosts, T_Post } from "@/service/post";

type Props = {
  params: {
    slug: string;
  };
};

const postSlugPage = async ({ params }: Props) => {
  const allPost = await getAllPosts();
  const post = allPost.find((item: T_Post) => {
    return String(item.id) === params.slug;
  });

  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <PrevNext post={post} />
    </div>
  );
};

export default postSlugPage;
