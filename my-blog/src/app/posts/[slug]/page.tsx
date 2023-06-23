import { DetailPage } from "components/main/post/detailPost/DetailPage";
import { T_Post, getAllPosts, getNextPrevData } from "service/post";

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

  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <DetailPage post={post} prevNextPosts={postData} />
    </div>
  );
};

export default postSlugPage;
