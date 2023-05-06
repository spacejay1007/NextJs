// 예전 방식의 API 라우트

import { getProducts } from "@/service/products";

// import { getProducts, T_Product } from "@/service/products";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// type Data = {
//   name: string;
// };

// export default async function handler(
//   req: NextApiRequest,
//   // res: NextApiResponse<Data>
//   res: NextApiResponse<T_Product[]>
// ) {
//   if (req.method === "GET") {
//     const products = await getProducts();
//     return res.status(200).json(products);
//   }
//   res.status(200).json([{ id: "50", name: "John", price: 4000 }]);
// }

// export async function GET(req:Request, res:Response){
//   const products = getProducts();

// }

export const GET = async (req: Request) => {
  const products = await getProducts();
  return NextResponse.json(products);
};
