import PageHeader from "@/components/PageHeader";
import PublicConfig from "@/components/PublicConfig";

export default function EnvironmentDemoPage() {
  const hasPrivateConfig = Boolean(process.env.COURSE_INTERNAL_TOKEN);

  return (
    <main className="page-shell">
      <PageHeader title="Environment Configuration" description="Private server settings and safe public values have different responsibilities." />
      <section className="content-card mb-6">
        <h2>Private configuration</h2>
        <p>Private server configuration: {hasPrivateConfig ? "Loaded" : "Missing"}</p>
        <p>The private value stays on the server. Only its availability is shown here.</p>
      </section>
      <PublicConfig />
    </main>
  );
}
