import type { ReactNode } from "react";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="page-shell dashboard-shell">
      <aside className="dashboard-sidebar">
        <h2>Dashboard</h2>
        <nav aria-label="Dashboard navigation">
          <ul className="dashboard-links">
            <li><Link href="/dashboard">Overview</Link></li>
            <li><Link href="/dashboard/profile">Profile</Link></li>
            <li><Link href="/dashboard/settings">Settings</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="dashboard-content">{children}</main>
    </div>
  );
}
