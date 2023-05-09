import Link from "next/link";
import React from "react";

export const Header: React.FC = (): JSX.Element => {
  return (
    <>
      <header className="flex justify-between items-center py-5">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">{`Jay's Blog`}</h1>
        </Link>
        <nav className="">
          <Link className="pr-2" href={"/"}>
            home
          </Link>
          <Link className="pr-2" href={"/about"}>
            About
          </Link>
          <Link className="pr-2" href={"/posts"}>
            posts
          </Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
      </header>
    </>
  );
};
