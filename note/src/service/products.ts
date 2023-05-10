// const products = ;

import path from "path";
import { promises as fs } from "fs";

export type T_Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

// : Promise<T_Product[]>
export const getProducts = async () => {
  // process.cwd() process 경로를 받아온다
  const filePath = path.join(process.cwd(), "data", "product.json");
  const data = await fs.readFile(filePath, "utf-8");
  // ["pants", "shirt", "shoes", "skirt", "dress"];
  return JSON.parse(data);
};

export const getProduct = async (
  id: string
): Promise<T_Product | undefined> => {
  const product = await getProducts();
  return product.find((item: T_Product) => item.id === id);
  // return "shirt";
};
