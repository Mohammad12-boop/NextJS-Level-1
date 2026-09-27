import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import SlowDashboardSection from "@/components/SlowDashboardSection";

export default function StreamingDemoPage() {
  return (
    <main className="page-shell">
      <PageHeader title="Streaming Demo" description="This page shell is ready immediately. The detailed section arrives when its server work finishes." />
      <p className="mb-6">You can read this introduction while the dashboard details are loading.</p>
      <Suspense fallback={
        <p role="status" aria-live="polite" className="content-card">Loading detailed dashboard data...</p>
      }>
        <SlowDashboardSection />
      </Suspense>
    </main>
  );
}
