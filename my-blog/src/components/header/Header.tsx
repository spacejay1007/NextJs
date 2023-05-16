import Link from "next/link";
import React from "react";

export const Header: React.FC = (): JSX.Element => {
  return (
    <>
      <header className="flex justify-between items-center p-4">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">{`Jay's Blog`}</h1>
        </Link>
        <nav className="flex gap-4">
          <Link href={"/"}>home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/posts"}>posts</Link>
          <Link href={"/posting"}>posting</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
      </header>
    </>
  );
};
