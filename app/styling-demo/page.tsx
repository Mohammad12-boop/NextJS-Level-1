import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";

export default function StylingDemoPage() {
  return (
    <main className="page-shell">
      <PageHeader title="Global CSS and CSS Modules" description="Choose styles based on how widely they should apply." />
      <section className="content-card">
        <h2>Global styles</h2>
        <p>The page layout, typography, and this shared card use app/globals.css. These rules can be reused across the application.</p>
      </section>
      <InfoCard
        title="Scoped component styles"
        description="This InfoCard imports its own CSS Module. Its teal border and local class names apply only where this component uses them."
      />
    </main>
  );
}
