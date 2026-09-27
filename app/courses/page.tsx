import PageHeader from "@/components/PageHeader";
import CourseExplorer from "@/components/CourseExplorer";
import { courses } from "@/lib/courses";
import { connection } from "next/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  description: "Browse beginner courses in Next.js, React, and TypeScript with clear topics, durations, and learning goals.",
};

export default async function CoursesPage() {
  // Challenge 13: run this demo delay at request time, not only during the build.
  await connection();
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <main className="page-shell">
      <PageHeader
        title="Course Catalog"
        description="Choose your next step. Explore focused beginner courses in modern web development."
      />
      <CourseExplorer courses={courses} />
    </main>
  );
}
