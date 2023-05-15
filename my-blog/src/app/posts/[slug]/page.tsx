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
      {post && (
        <>
          <div>{post.image}</div>
          <div>{post.title}</div>
          <div>{post.desc}</div>
        </>
      )}
    </div>
  );
};

export default postSlugPage;
