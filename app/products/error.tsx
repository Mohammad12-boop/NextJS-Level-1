"use client";

export default function ProductsError({ reset }: { reset: () => void }) {
  return (
    <main className="page-shell">
      <section className="content-card" aria-labelledby="products-error-title">
        <h1 id="products-error-title" className="text-2xl font-bold">Unable to load products</h1>
        <p role="alert">Something went wrong. Please try again or return to the product list.</p>
        <div className="demo-controls">
          <button type="button" onClick={() => reset()}>Try Again</button>
          {/* A native GET navigation clears both the query and the error state. */}
          <form action="/products" method="get">
            <button type="submit">Return to products</button>
          </form>
        </div>
      </section>
    </main>
  );
}
