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

export const generatorStaticParams = () => {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
};
