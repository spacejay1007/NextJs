import { MeoArticle } from "@/components/MeoArticle";
import { getProducts, T_Product } from "@/service/products";
import Image from "next/image";
import clothes from "public/images/clothes.jpg";
import Link from "next/link";
// const clothImg = require("public/image/clothStore.jfif");

// 기본적으론 false SSG ,  0 으로 하면 SSR 처럼 요청이 올때마다 , 몇초마다 ISR 할건지 작성
// export const revalidate = 3;

const ProductsPage = async ({ children }: any) => {
  // 서버 파일 (데이터베이스) 에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = await getProducts();

  return (
    <div>
      <h1>Product Page</h1>
      <Image src={clothes} alt="Clothes" />
      <Image
        src={"https://images.unsplash.com/photo-1441986300917-64674bd600d8"}
        alt="Clothes"
        width={400}
        height={400}
      />

      <ul>
        {products.map((item: T_Product, idx: number) => {
          return (
            <li key={idx}>
              <Link href={`/products/${item.id}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <MeoArticle />
      {/* <li>
        <Link href="/products/pants">Pants </Link>
      </li>
      <li>
        <Link href="/products/skirt">Skirt</Link>
      </li> */}
    </div>
  );
};

export default ProductsPage;
