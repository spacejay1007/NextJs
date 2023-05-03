"use client";

import { useRouter } from "next/navigation";

export const GoProductsButton: React.FC = (): JSX.Element => {
  const router = useRouter();
  // const navigation = useNavigation();
  return (
    <button
      onClick={() => {
        router.push("/products");
      }}
    >
      제품 페이지로 이동
    </button>
  );
};
