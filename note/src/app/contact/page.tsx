import { Metadata } from "next";

export const metadata: Metadata = {
  title: "멋진 제품 사이트 | 전체 제품 확인",
  description: "멋진 제품을 판매하는 곳입니다.",
};

const page = ({ children }: any) => {
  return <div>Contact Page</div>;
};

export default page;
