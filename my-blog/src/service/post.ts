import path from "path";
import { promises as fs } from "fs";

export type T_Post = {
  id: string;
  title: string;
  desc: string;
  date: Date;
  image: string;
<<<<<<< HEAD
  tag: string;
=======
  category: string;
>>>>>>> ffa17766e11963b8303c2af20edd5a8239d9c754
};

export const getPosts = async (): Promise<T_Post[]> => {
  const filePath = path.join(process.cwd(), "data", "post.json");
  const data = fs
    .readFile(filePath, "utf-8")
    .then<T_Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > a.date ? -1 : 1)));

  return data;
  // return JSON.parse(data);
};

// export const getPost = async (id: string): Promise<T_Post | undefined> => {
//   const post = await getPosts();
//   return post.find((item: T_Post) => item.id === id);
// };
