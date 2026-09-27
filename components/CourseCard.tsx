import Link from "next/link";
import type { Course } from "@/lib/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <li className="portal-course-card">
      <p className="portal-eyebrow">{course.category}</p>
      <h3><Link href={`/courses/${course.slug}`}>{course.title}</Link></h3>
      <p>{course.description}</p>
      <p className="portal-course-meta">{course.level} · {course.duration}</p>
      <Link href={`/courses/${course.slug}`} className="portal-text-link">Explore {course.title} →</Link>
    </li>
  );
}
