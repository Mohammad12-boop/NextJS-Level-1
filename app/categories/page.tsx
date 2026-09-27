import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { categories, courses } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Categories",
  description: "Explore course categories and find your next topic in web development.",
};

export default function CategoriesPage() {
  return (
    <main className="page-shell">
      <PageHeader title="Learning Categories" description="Find a starting point that matches what you want to build." />
      <div className="catalog-grid">
        {categories.map((category) => {
          const categoryCourses = courses.filter((course) => course.category === category);
          return (
            <section key={category} className="content-card">
              <h2>{category}</h2>
              <p>{categoryCourses.length} {categoryCourses.length === 1 ? "course" : "courses"}</p>
              <ul className="mt-4 space-y-3">
                {categoryCourses.map((course) => <li key={course.slug}><Link className="portal-text-link" href={`/courses/${course.slug}`}>{course.title} →</Link></li>)}
              </ul>
            </section>
          );
        })}
      </div>
      <p className="mt-8"><Link href="/courses" className="portal-text-link">Explore the full course catalog →</Link></p>
    </main>
  );
}
