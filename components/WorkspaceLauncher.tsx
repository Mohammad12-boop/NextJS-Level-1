import Link from "next/link";

export default function WorkspaceLauncher() {
  return (
    <header className="workspace-launcher">
      <div className="workspace-launcher-inner">
        <h1 className="mb-6 text-2xl font-bold">Next.js Level 1</h1>
        <nav aria-label="Level 1 sections">
          <ul className="flex flex-wrap gap-3">
            <li><Link className="workspace-menu-link" href="/part-a">Part A - Questions</Link></li>
            <li><Link className="workspace-menu-link" href="/part-b">Part B - Challenges</Link></li>
            <li><Link className="workspace-menu-link" href="/final-project">Final Project</Link></li>
            <li><Link className="workspace-menu-link" href="/">Reset</Link></li>
          </ul>
        </nav>
      </div>
      <hr />
    </header>
  );
}
