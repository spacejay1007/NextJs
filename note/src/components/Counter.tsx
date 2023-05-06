"use client";

import React, { useState } from "react";

export const Counter: React.FC = (): JSX.Element => {
  const [cnt, setCnt] = useState(0);
  console.log("안녕 - Client");
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
