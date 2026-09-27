import { connection } from "next/server";
import { products } from "@/lib/products";

export default async function SlowDashboardSection() {
  // Keep the demonstration delay at request time and inside the Suspense child.
  await connection();
  await new Promise((resolve) => setTimeout(resolve, 1800));

  return (
    <section className="content-card">
      <h2>Detailed dashboard data</h2>
      <p>Products available: {products.length}</p>
      <p>Total units in stock: {products.reduce((total, product) => total + product.stock, 0)}</p>
    </section>
  );
}
