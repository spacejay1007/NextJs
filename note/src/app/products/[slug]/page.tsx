type Props = {
  params: {
    slug: string;
  };
};

const page = ({ params }: Props) => {
  console.log(params);

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
