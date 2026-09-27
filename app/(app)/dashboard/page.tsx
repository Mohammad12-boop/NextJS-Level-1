import PageHeader from "@/components/PageHeader";

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard Overview"
        description="Welcome to the dashboard area of the learning portal."
      />
      <section className="content-card">
        <h2>Your learning space</h2>
        <p>
          Use the dashboard navigation to explore the profile and settings pages.
          All three pages share the same nested dashboard layout.
        </p>
      </section>
    </>
  );
}
