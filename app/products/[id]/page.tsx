import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { products } from "@/lib/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Accept digits only, then normalize to the numeric IDs used in our data.
  if (!/^[0-9]+$/.test(id)) {
    notFound();
  }

  const productId = Number(id);
  if (!Number.isSafeInteger(productId) || productId <= 0) {
    notFound();
  }

  const product = products.find((product) => product.id === productId);
  if (!product) {
    notFound();
  }

  return (
    <main className="page-shell">
      <PageHeader title={product.name} description="Details from our local sample product catalog." />
      <section className="content-card">
        <h2>Product details</h2>
        <dl className="product-details">
          <div><dt>Price</dt><dd>${product.price.toFixed(2)} USD</dd></div>
          <div><dt>Category</dt><dd>{product.category}</dd></div>
          <div><dt>Stock</dt><dd>{product.stock} available</dd></div>
        </dl>
      </section>
      <p className="intro-links"><Link href="/products">Back to products</Link></p>
    </main>
  );
}
