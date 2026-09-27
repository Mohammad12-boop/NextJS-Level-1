import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import FavoriteButton from "@/components/FavoriteButton";
import { products } from "@/lib/products";

export default function ProductFeaturePage() {
  const product = products[0];

  return (
    <main className="page-shell">
      <PageHeader title={product.name} description="A featured item from our local product catalog." />
      <Image
        src="/images/study-notebook.png"
        alt="Illustration of a teal study notebook with lined pages and an orange pencil"
        width={1200}
        height={720}
        sizes="(max-width: 1024px) calc(100vw - 48px), 976px"
        className="product-hero"
      />
      <section className="content-card">
        <h2>Product details</h2>
        <p>Price: ${product.price.toFixed(2)} USD</p>
        <p>Category: {product.category}</p>
        <p>Stock: {product.stock}</p>
        <div className="demo-controls">
          <FavoriteButton initialFavorite={false} />
        </div>
      </section>
    </main>
  );
}
