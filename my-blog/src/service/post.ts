import path from "path";
import { promises as fs } from "fs";

export type T_Post = {
  id: string;
  title: string;
  desc: string;
  date: string;
  image: string;
};

export const getPosts = async (): Promise<T_Post[]> => {
  const filePath = path.join(process.cwd(), "data", "post.json");
  const data = await fs.readFile(filePath, "utf-8");

  return JSON.parse(data);
};

export const getPost = async (id: string): Promise<T_Post | undefined> => {
  const post = await getPosts();
  return post.find((item: T_Post) => item.id === id);
};
