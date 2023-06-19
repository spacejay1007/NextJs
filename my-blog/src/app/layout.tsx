import { Header } from "@/components/header/Header";
import "./globals.css";
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
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto h-full">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
