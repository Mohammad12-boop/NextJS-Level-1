import PageHeader from "@/components/PageHeader";

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="A static preview of where learner preferences would live."
      />
      <section className="content-card">
        <h2>Example preferences</h2>
        <p>Language: English</p>
        <p>Study topic: Next.js Level 1</p>
        <p>These values are placeholders and cannot be changed on this page.</p>
      </section>
    </>
  );
}
