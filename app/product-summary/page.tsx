import PageHeader from "@/components/PageHeader";
import { products } from "@/lib/products";

export default function ProductSummaryPage() {
  // These calculations run on the server using the existing local dataset.
  const totalProducts = products.length;
  const inStockProducts = products.filter((product) => product.stock > 0).length;

  return (
    <main className="page-shell">
      <PageHeader title="Product Summary" description="A server-rendered overview of our sample catalog." />
      <section className="content-card mb-6" aria-label="Catalog totals">
        <p>Total products: {totalProducts}</p>
        <p>Products in stock: {inStockProducts}</p>
      </section>
      <ul className="catalog-grid">
        {products.map((product) => (
          <li key={product.id} className="content-card">
            <h2>{product.name}</h2>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price.toFixed(2)} USD</p>
            <p>Stock: {product.stock}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
