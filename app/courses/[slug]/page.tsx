import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { courses } from "@/lib/courses";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((course) => course.slug === slug);

  if (!course) {
    notFound();
  }

  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((course) => course.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="page-shell">
      <PageHeader title={course.title} description={course.description} />
      <section className="content-card">
        <h2>Course details</h2>
        <p>Category: {course.category}</p>
        <p>Level: {course.level}</p>
        <p>Duration: {course.duration}</p>
        <p>Instructor: {course.instructor}</p>
      </section>
      <section className="content-card mt-6">
        <h2>Course overview</h2>
        <p>{course.overview}</p>
        <h3 className="mt-6 font-semibold">What you will learn</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {course.topics.map((topic) => <li key={topic}>{topic}</li>)}
        </ul>
      </section>
      <p className="intro-links"><Link href="/courses">Back to courses</Link></p>
    </main>
  );
}
