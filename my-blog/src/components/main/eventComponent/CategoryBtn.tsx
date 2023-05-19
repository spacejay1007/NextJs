"use client";

import React from "react";

type T_Item = {
  item: string;
};

const CategoryBtn = async ({ item }: T_Item) => {
  return (
    <div
      onClick={() => {
        console.log("btn");
      }}
    >
      {item}
    </div>
  );
};

export default CategoryBtn;
