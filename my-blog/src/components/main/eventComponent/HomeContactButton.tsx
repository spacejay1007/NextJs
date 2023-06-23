"use client";

import { Button } from "common/components/button/Button";
import { useRouter } from "next/navigation";
import React from "react";

export const HomeContactButton: React.FC = (): JSX.Element => {
  const navigate = useRouter();
  return (
    <Button
      onClick={() => {
        navigate.push("/contact");
      }}
      text="Contact Me"
    />
    // <button
    //   className="rounded border-inherit border p-1 bg-yellow-300"
    //   onClick={() => {

    //   }}
    // >
    //   Contact Me
    // </button>
  );
};
