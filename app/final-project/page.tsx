import Link from "next/link";
import type { Metadata } from "next";
import CourseCard from "@/components/CourseCard";
import { categories, courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: { absolute: "Home | Next.js Learning Portal" },
  description: "Discover beginner courses in Next.js, React, and TypeScript. Build your web development foundations one lesson at a time.",
};

export default function Home() {
  return (
    <main className="page-shell portal-home">
      <section className="portal-hero">
        <p className="portal-eyebrow">Learn. Practice. Build.</p>
        <h1>Next.js Learning &amp; Course Catalog Portal</h1>
        <p>Start with the essentials. Explore approachable courses that help you turn web development concepts into working interfaces.</p>
        <div className="portal-actions">
          <Link href="/courses" className="portal-button">Explore courses</Link>
          <Link href="/categories" className="portal-button portal-button-secondary">Browse categories</Link>
        </div>
        <p className="portal-hero-note">{courses.length} focused courses · Beginner-friendly · Learn at your own pace</p>
      </section>

      <section className="portal-section" aria-labelledby="featured-title">
        <div className="portal-section-heading">
          <h2 id="featured-title">Build your foundations</h2>
          <Link href="/courses" className="portal-text-link">View all courses →</Link>
        </div>
        <ul className="catalog-grid">
          {courses.slice(0, 3).map((course) => <CourseCard key={course.slug} course={course} />)}
        </ul>
      </section>

      <section className="portal-section" aria-labelledby="categories-title">
        <h2 id="categories-title">Choose a learning direction</h2>
        <ul className="portal-category-links">
          {categories.map((category) => <li key={category}><Link href="/categories">{category} →</Link></li>)}
        </ul>
      </section>

      <section className="portal-learning">
        <h2>Understand the pieces. Then put them together.</h2>
        <p>Learn to structure pages, compose reusable UI, and describe data with types. This portal brings those ideas together in one Next.js application.</p>
        <Link href="/about" className="portal-text-link">About this learning project →</Link>
      </section>
    </main>
  );
}
