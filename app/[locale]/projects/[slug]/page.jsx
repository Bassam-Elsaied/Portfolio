import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/SingleProduct";

import { products } from "@/data/product";

import { redirect } from "next/navigation";

export default async function SingleProjectPage({ params }) {
  const slug = await params.slug;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
  }
  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
