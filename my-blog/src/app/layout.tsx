import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jay Blog Welcome",
  description: "Jay Personal Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full px-10">
          <header className="flex justify-between items-center py-5">
            <h1 className="text-2xl font-bold">{`Jay's Blog`}</h1>
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
          {children}
        </div>
      </body>
    </html>
  );
}
