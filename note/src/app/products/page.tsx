import Link from "next/link";

const products = ["pants", "shirt", "shoes", "skirt"];

const page = ({ children }: any) => {
  return (
    <div>
      <h1>Product Page</h1>
      <ul>
        {products.map((item: string, idx: number) => {
          return (
            <li key={idx}>
              <Link href={`/products/${item}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
      {/* <li>
        <Link href="/products/pants">Pants </Link>
      </li>
      <li>
        <Link href="/products/skirt">Skirt</Link>
      </li> */}
    </div>
  );
};

export default page;
