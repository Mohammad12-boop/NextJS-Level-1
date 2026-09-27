import PageHeader from "@/components/PageHeader";
import { fetchPosts, type Post } from "@/lib/public-api";

export default async function ServerDataPage() {
  let posts: Post[] | null = null;

  try {
    posts = await fetchPosts();
  } catch {
    // Keep network failures and their technical details out of the rendered UI.
  }

  return (
    <main className="page-shell">
      <PageHeader title="Server-Side Data" description="Five sample posts loaded on the server from JSONPlaceholder." />
      {posts ? (
        <ul className="catalog-grid">
          {posts.map((post) => (
            <li key={post.id} className="content-card">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p role="status" className="content-card">We could not load the posts right now. Please try reloading this page later.</p>
      )}
    </main>
  );
}
