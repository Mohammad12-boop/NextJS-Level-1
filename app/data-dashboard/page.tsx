import PageHeader from "@/components/PageHeader";
import { fetchPosts, fetchUsers } from "@/lib/public-api";

export default async function DataDashboardPage() {
  let data = null;

  try {
    // Neither request depends on the other, so start both before awaiting them.
    const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);
    data = { users, posts };
  } catch {
    // A failed request produces a friendly fallback instead of a blank page.
  }

  return (
    <main className="page-shell">
      <PageHeader title="Data Dashboard" description="Two independent public datasets loaded in parallel on the server." />
      {data ? (
        <div className="catalog-grid">
          <section className="content-card">
            <h2>Users</h2>
            <p>Users in this sample: {data.users.length}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              {data.users.map((user) => <li key={user.id}>{user.name}</li>)}
            </ul>
          </section>
          <section className="content-card">
            <h2>Posts</h2>
            <p>Posts in this sample: {data.posts.length}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              {data.posts.map((post) => <li key={post.id}>{post.title}</li>)}
            </ul>
          </section>
        </div>
      ) : (
        <p role="status" className="content-card">We could not load the dashboard data right now. Please try reloading this page later.</p>
      )}
    </main>
  );
}
