import { Mainpost } from "components/main/post/Mainpost";

const PostsPage = () => {
  // const posts = getPosts();

  return (
    <div>
      <div>하이</div>
      {/* @ts-expect-error Async Server Component */}
      <Mainpost />
    </div>
  );
};

export default PostsPage;
