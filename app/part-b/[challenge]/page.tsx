import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { challenges } from "@/lib/challenges";

export default async function ChallengePage({ params }: { params: Promise<{ challenge: string }> }) {
  const { challenge: id } = await params;
  const challenge = challenges.find((item) => item.id === id);
  if (!challenge) notFound();

  return (
    <main className="page-shell">
      <PageHeader title={`Challenge ${challenge.id} — ${challenge.title}`} description="Completed" />
      <section className="content-card workspace-files">
        <h2>What was implemented</h2>
        <p>{challenge.summary}</p>
        <h2 className="mt-6">Important files</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {challenge.files.map((file) => <li key={file}><code>{file}</code></li>)}
        </ul>
        <h2 className="mt-6">Explore the implementation</h2>
        {challenge.routes.length > 0 ? (
          <ul className="intro-links">
            {challenge.routes.map((route) => <li key={route}><Link prefetch={false} href={route}>Open {route}</Link></li>)}
          </ul>
        ) : (
          <p>This topic supports the shared application. Inspect the listed files in your editor, or <Link className="portal-text-link" href="/final-project">open the Final Project</Link> to see the shared layout, navigation, and course cards.</p>
        )}
      </section>
      <nav className="intro-links" aria-label="Challenge navigation">
        <Link href="/part-b">Back to Challenges</Link>
        <Link href="/">Back to Level 1</Link>
      </nav>
    </main>
  );
}
