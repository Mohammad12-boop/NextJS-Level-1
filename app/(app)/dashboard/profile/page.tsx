import PageHeader from "@/components/PageHeader";

export default function ProfilePage() {
  return (
    <>
      <PageHeader
        title="Profile"
        description="Example profile information for a learner."
      />
      <section className="content-card">
        <h2>Learner profile</h2>
        <p>Name: Sample Student</p>
        <p>Learning focus: Next.js App Router fundamentals.</p>
        <p>This is static placeholder content, not a personal account.</p>
      </section>
    </>
  );
}
