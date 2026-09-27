import NavLink from "@/components/NavLink";

const links = [
  { href: "/final-project", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="site-nav">
        <p className="site-name">Next.js Learning Portal</p>
        <nav aria-label="Public navigation">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
