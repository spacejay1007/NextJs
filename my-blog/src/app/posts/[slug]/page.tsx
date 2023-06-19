import { DetailPage } from "@/components/main/post/detailPost/DetailPage";
import { PrevNext } from "@/components/main/post/detailPost/PrevNext";
import { getAllPosts, getNextPrevData, T_Post } from "@/service/post";

type Props = {
  params: {
    slug: string;
  };
};

const postSlugPage = async ({ params }: Props) => {
  const allPost = await getAllPosts();
  const postData = await getNextPrevData(Number(params.slug));
  const post = allPost.find((item: T_Post) => {
    return String(item.id) === params.slug;
  });

  console.log(post, postData);
  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <DetailPage post={post} prevNextPosts={postData} />
    </div>
  );
};

export default postSlugPage;
