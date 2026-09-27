export default function CoursesLoading() {
  return (
    <main className="page-shell">
      <div className="content-card" role="status" aria-live="polite">
        <p>Loading courses...</p>
        <p>Please wait while we prepare the course list.</p>
      </div>
    </main>
  );
}
