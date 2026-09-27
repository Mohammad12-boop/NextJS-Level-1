import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the Learning Portal: a beginner-friendly course catalog built with Next.js, React, and TypeScript.",
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <PageHeader title="About the Portal" description="A small course catalog built around a simple idea: learn by making things." />
      <section className="content-card">
        <h2>Learning by building</h2>
        <p>This portal helps beginners discover focused courses in modern web development. Browse topics, compare course details, and choose what to study next.</p>
        <p>It is also a Level 1 student project built with Next.js 16, React, and TypeScript. The App Router organizes pages and shared layouts, while Server Components render the course data.</p>
        <p>Small Client Components handle interactions only where they are needed. The earlier challenge demos remain available at their original URLs.</p>
      </section>
    </main>
  );
}
