import Link from "next/link";

export default function Footer() {
  return (
    <footer className="portal-footer">
      <div className="page-shell">
        <div>
          <p className="font-semibold">Next.js Learning Portal</p>
          <p className="mt-2">Small lessons. Strong foundations.</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-5">
          <Link href="/courses">Courses</Link>
          <Link href="/about">About the portal</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <p className="text-sm">Level 1 · Learning &amp; Course Catalog Portal</p>
      </div>
    </footer>
  );
}
