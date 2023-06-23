import { Header } from "components/header/Header";
import "./globals.css";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Open_Sans } from "next/font/google";
import { Footer } from "components/footer/Footer";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Jay Blog Welcome",
  description: "Jay Personal Blog",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="en" className={inter.className}>
        <body className="flex flex-col w-full max-w-screen-2xl mx-auto h-full">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
          <ReactQueryDevtools initialIsOpen={false} />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
