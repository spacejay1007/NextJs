import { DetailPage } from "components/main/post/detailPost/DetailPage";
import Image from "next/image";
import NoImg from "../../../../public/img/not_img.jpg";
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
      <Image
        src={!!post ? `/img/${post.image}` : NoImg}
        alt="image"
        width={430}
        height={400}
        className="w-full max-h-48"
        style={{ minHeight: 400 }}
      />
      {/* @ts-expect-error Async Server Component */}
      <DetailPage post={post} prevNextPosts={postData} />
    </div>
  );
};

export default postSlugPage;
