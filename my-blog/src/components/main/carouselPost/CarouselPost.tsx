/* eslint-disable react/no-children-prop */
import { T_Post, getAllPosts } from "@/service/post";
import PostsCard from "../post/postList/PostsCard";
import MultiCarousel from "./MultiCarousel";

const CarouselPost = async () => {
  const posts = await getAllPosts();
  const mapPost = posts.map((item: T_Post) => item.title);

  return (
    <section>
      <h2>You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostsCard key={post.id} item={post} />
        ))}
      </MultiCarousel>
    </section>
  );
};

export default CarouselPost;
