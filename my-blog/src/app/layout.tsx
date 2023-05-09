import { Header } from "@/components/header/Header";
import "./globals.css";
import Link from "next/link";
import { Footer } from "@/components/footer/Footer";
import { Open_Sans } from "next/font/google";

const inter = Open_Sans({ subsets: ["latin"] });

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
    <html lang="en" className={inter.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        {/* <div className="w-full px-10"> */}
        <Header />
        <main className="grow bg-sky-400">{children}</main>
        {/* <footer className="flex justify-center items-center"> */}
        <Footer />
        {/* </footer> */}
        {/* </div> */}
      </body>
    </html>
  );
}
