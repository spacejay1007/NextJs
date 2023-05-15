import { readFile } from "fs/promises";
import path from "path";
// import { promises as fs, readFile } from "fs";

export type T_Post = {
  id: number;
  title: string;
  desc: string;
  date: Date;
  image: string;
  category: string;
};

// export const getPosts = async (): Promise<T_Post[]> => {
//   const filePath = path.join(process.cwd(), "data", "post.json");
//   // const data = readFile(filePath, "utf-8").then<T_Post[]>(JSON.parse)
//   //   .then((posts) => posts.sort((a, b) => (a.date > a.date ? -1 : 1)));

//   return readFile(filePath, "utf-8")
//     .then<T_Post[]>(JSON.parse)
//     .then((posts) => posts.sort((a, b) => (a.date > a.date ? -1 : 1)));
//   // return JSON.parse(data);
// };

export async function getAllPosts(): Promise<T_Post[]> {
  const filePath = path.join(process.cwd(), "public", "data", "post.json");

  return readFile(filePath, "utf-8")
    .then<T_Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > a.date ? -1 : 1)));
}

// export const getPost = async (id: string): Promise<T_Post | undefined> => {
//   const post = await getPosts();
//   return post.find((item: T_Post) => item.id === id);
// };
