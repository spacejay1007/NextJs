"use client";

import { getProducts } from "@/service/products";
import React, { useState } from "react";

export const Counter = async () => {
  const [cnt, setCnt] = useState(0);
  // const ggg = await getProducts();
  // const gggg = await getProduct("1");
  // console.log(ggg, gggg);
  // console.log("안녕 - Client");
  return (
    <div>
      <p>{cnt}</p>
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        증가증가!!!
      </button>
    </div>
  );
};
