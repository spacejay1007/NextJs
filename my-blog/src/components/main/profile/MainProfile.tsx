"use client";

import Image from "next/image";
import React from "react";
import { HomeContactButton } from "../eventComponent/HomeContactButton";

export const MainProfile: React.FC = (): JSX.Element => {
  return (
    <div className="w-full justify-center flex flex-col items-center gap-3">
      <Image
        className="rounded-full "
        src={
          "https://avatars.githubusercontent.com/u/89574010?s=400&u=fbea04d9aa33b9c0f384c1a54982c42621332f4a&v=4"
        }
        alt="JayImage"
        width={200}
        height={200}
      />

      <div className="text-lg font-bold mt-5">{`Hi, I'm Jay`}</div>
      <div>Front-End engineer</div>
      <div className="text-sm">
        My Stack : Javascript, TypeScript, React, NextJs
      </div>
      <HomeContactButton />
    </div>
  );
};
