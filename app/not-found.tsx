import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function NotFound() {
  return (
    <main className="page-shell">
      <PageHeader
        title="404 — Not Found"
        description="The requested page or record could not be found. Try one of these pages instead."
      />
      <nav aria-label="Not-found navigation">
        <ul className="intro-links">
          <li><Link href="/final-project">Home</Link></li>
          <li><Link href="/">Back to Level 1</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/products">Products</Link></li>
        </ul>
      </nav>
    </main>
  );
}
