import { notFound } from "next/navigation";
import type { Metadata } from "next";
import os from "os"; // node APIs
import { Counter } from "../components/Counter";

// export const metadata: Metadata = {
//   title: "Home",
//   description: "Welecome to Next Js",
// };

export default function Home() {
  // notFound();
  console.log(os.hostname());
  console.log("안녕 - Server");
  return (
    <div>
      <h1>홈페이지 버젼 1</h1>
      <Counter />
    </div>
  );
}
