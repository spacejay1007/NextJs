import { notFound } from "next/navigation";

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

const page = ({ params }: Props) => {
  console.log(params);
  if (params.slug === "nothing") {
    notFound();
  }

  if (params.slug === "pants") {
    return <div>pants~~~!!!</div>;
  }

  if (params.slug === "skirt") {
    return <div>skirt~~~!!!</div>;
  }

  return <div>{params.slug}동적라우팅</div>;
};

export default page;

// 페이지 미리 생성
export const generatorStaticParams = () => {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
};
