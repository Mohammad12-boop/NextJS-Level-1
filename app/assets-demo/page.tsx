import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export default function AssetsDemoPage() {
  return (
    <main className="page-shell">
      <PageHeader title="Static Assets" description="Images, icons, and downloads served from the public folder." />
      <section className="content-card mb-6">
        <Image src="/icons/learning-icon.svg" alt="Open book learning icon" width={64} height={64} />
        <h2 className="mt-4">Learning resources</h2>
        <p>Public files use URLs starting at the site root.</p>
        <p><a href="/downloads/sample-course-outline.txt" download className="underline">Download the sample course outline (.txt)</a></p>
      </section>
      <Image
        src="/images/study-notebook.png"
        alt="Illustration of a teal study notebook with lined pages and an orange pencil"
        width={1200}
        height={720}
        sizes="(max-width: 1024px) calc(100vw - 48px), 976px"
        className="product-hero"
      />
    </main>
  );
}
