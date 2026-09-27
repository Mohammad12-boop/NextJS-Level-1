import Link from "next/link";
import { challenges } from "@/lib/challenges";

export const metadata = { title: "Part B — Challenges" };

export default function PartBPage() {
  return (
    <main className="page-shell">
      <h1 className="mb-6 text-2xl font-bold">Part B — Challenges</h1>
      <p className="mb-8 portal-text-link"><Link href="/">Back to Level 1</Link></p>
      <ol className="space-y-4" aria-label="Completed challenges">
        {challenges.map((challenge) => (
          <li key={challenge.id}>
            <Link className="underline" prefetch={false} href={challenge.routes[0] ?? `/part-b/${challenge.id}`}>Challenge {challenge.id} — {challenge.title}</Link>
            <Link className="ml-3 text-sm underline" href={`/part-b/${challenge.id}`}>Details</Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
