import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getProducts } from "../data/helper";

export default function Home(props) {
  const { products } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>Pre-rendering and data fetching</title>
        <ul>
          {products?.map((product) => (
            <li key={product.id}>
              <Link href={`/${product.id}`}>{product.title}</Link>
            </li>
          ))}
        </ul>
      </Head>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: { products },
  };
}
