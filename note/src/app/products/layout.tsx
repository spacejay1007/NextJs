import Link from "next/link";
import styles from "./layout.module.css";
import { Inter, Open_Sans, Nanum_Gothic } from "next/font/google"; // page 보다는 font는 최상의 경로에서 사용해주는게 좋다

const inter = Inter({ subsets: ["latin"] });
const sans = Open_Sans({ subsets: ["latin"] });
const gothic = Nanum_Gothic({ weight: "700", subsets: ["latin"] });

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">여성복</Link>
        <Link href="/products/man">남성복</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
