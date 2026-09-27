import Counter from "@/components/Counter";
import PageHeader from "@/components/PageHeader";

export default function CounterDemoPage() {
  return (
    <main className="page-shell">
      <PageHeader title="Counter Demo" description="A small interactive counter inside a Server Component page." />
      <section className="content-card">
        <h2>Try the counter</h2>
        <p>Use the buttons to decrease or increase the count.</p>
        <Counter initialCount={0} />
      </section>
    </main>
  );
}
