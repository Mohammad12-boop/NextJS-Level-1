"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
};

export default function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isExactMatch = pathname === href;
  const isActive =
    isExactMatch || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <Link
      href={href}
      className={isActive ? "nav-link-active" : undefined}
      aria-current={isExactMatch ? "page" : isActive ? "location" : undefined}
    >
      {label}
    </Link>
  );
}
