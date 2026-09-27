"use client";

import Link from "next/link";

export default function CoursesError({ retry }: { retry: () => void }) {
  return (
    <main className="page-shell">
      <section className="content-card" aria-labelledby="courses-error-title">
        <h1 id="courses-error-title" className="text-2xl font-bold">Unable to load courses</h1>
        <p role="alert">Something went wrong while opening the course catalog. Please try again or return Home.</p>
        <div className="demo-controls">
          <button type="button" onClick={() => retry()}>Try Again</button>
          <Link href="/final-project" className="portal-text-link">Return Home</Link>
        </div>
      </section>
    </main>
  );
}
