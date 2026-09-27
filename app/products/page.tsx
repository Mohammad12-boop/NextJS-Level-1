import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { products } from "@/lib/products";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string | string[]; q?: string | string[]; error?: string | string[] }>;
}) {
  const params = await searchParams;
  const deliberateError = Array.isArray(params.error) ? params.error[0] : params.error;
  if (deliberateError === "true") {
    throw new Error("Intentional products error for Challenge 14.");
  }

  // Repeated query keys use their first value.
  const category = (Array.isArray(params.category) ? params.category[0] : params.category) ?? "all";
  const q = (Array.isArray(params.q) ? params.q[0] : params.q) ?? "";

  return (
    <main className="page-shell">
      <PageHeader title="Products" description="Explore our small local sample product catalog." />
      <section aria-label="Active search parameters" className="mb-6 content-card">
        <p>Active Category: {category}</p>
        <p>Search Query: {q || "None"}</p>
      </section>
      <ul className="catalog-grid">
        {products.map((product) => (
          <li key={product.id} className="content-card">
            <h2><Link href={`/products/${product.id}`}>{product.name}</Link></h2>
            <p>${product.price.toFixed(2)} USD</p>
            <p>{product.category}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
