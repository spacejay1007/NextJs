"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const HomeContactButton: React.FC = (): JSX.Element => {
  const navigate = useRouter();
  return (
    <button
      className="rounded border-inherit border p-1 bg-yellow-300"
      onClick={() => {
        navigate.push("/contact");
      }}
    >
      Contact Me
    </button>
  );
};
