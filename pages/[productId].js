import { getProductById } from "../data/helper";

export default function Product({ product }) {
  return (
    <div>
      <h1>{product?.title}</h1>
      <p>{product?.description}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log("context innner product: ", context);
  const {
    params: { productId },
  } = context;

  const product = getProductById(productId);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        // you can list paths here to be inclueded at build time
        params: { productId: "p1" },
      },
    ],
    // or you can generate them when needed
    fallback: true,
  };
}
