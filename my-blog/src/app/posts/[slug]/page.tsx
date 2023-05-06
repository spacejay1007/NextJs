import { getPost } from "@/service/post";

type Props = {
  params: {
    slug: string;
  };
};

const postSlugPage = async ({ params }: Props) => {
  console.log(params);
  const post = await getPost(params.slug);
  console.log(post);

  return (
    <div>
      <div>{post?.image}</div>
      <div>{post?.title}</div>
      <div>{post?.desc}</div>
    </div>
  );
};

export default postSlugPage;
