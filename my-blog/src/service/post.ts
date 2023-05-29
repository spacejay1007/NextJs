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

export async function getNextPrevData(id: number) {
  const filePath = path.join(process.cwd(), "public", "data", "post.json");
  const posts = await getAllPosts();
  const post = posts.find((p) => p.id === id);

  if (!post) throw new Error(`${posts[id]}에 해당하는 포스트를 찾을 수 없음`);

  const index = posts.indexOf(post); // 포스트를 찾아서 몇번째에 있는지 찾아서 그 index 번호를 뿜어준다
  // next index === 0 이면 현재 페이지가 최신 post 이기 때문에 null
  const next = index > 0 ? posts[index - 1] : null;
  // prev index 가 전체 포스트 보다 커진다면 null
  const prev = index < posts.length ? posts[index + 1] : null;
  const content = await readFile(filePath, "utf-8");
  return { next, prev };
}

// export const getPost = async (id: string): Promise<T_Post | undefined> => {
//   const post = await getPosts();
//   return post.find((item: T_Post) => item.id === id);
// };
