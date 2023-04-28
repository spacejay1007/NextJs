import { getProduct, getProducts, T_Product } from "@/service/products";
import { notFound } from "next/navigation";

// // 기본적으론 false SSG ,  0 으로 하면 SSR 처럼 요청이 올때마다 , 몇초마다 ISR 할건지 작성
// export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 : ${params.slug}`,
  };
}

const ProductPage = async ({ params: { slug } }: Props) => {
  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
  const product = await getProduct(slug);

  // if (slug === "nothing") {
  //   notFound();
  // }

  if (!product) {
    notFound();
  }

  return <div>{product.name}동적라우팅</div>;
};

export default ProductPage;

// 페이지 미리 생성
// export const generatorStaticParams = async () => {
//   // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄 거임 (SSG)
//   const products = await getProducts();
//   // const products = ["pants", "skirt"];
//   return products.map((product: T_Product) => ({
//     slug: product.id,
//   }));
// };
