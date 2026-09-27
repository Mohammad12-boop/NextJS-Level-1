const projectFiles = [
  {
    name: "app/",
    description:
      "Contains routes, layouts, pages, and other App Router files. For example, app/page.tsx defines the home page, and app/about-project/page.tsx defines this page.",
  },
  {
    name: "public/",
    description:
      "Stores static assets such as images and icons. These files are served from the site root: public/next.svg is available at /next.svg.",
  },
  {
    name: "next.config.ts",
    description:
      "Contains Next.js framework configuration, such as image settings and redirects. Our project currently uses the generated default configuration.",
  },
  {
    name: "package.json",
    description:
      "Contains project metadata, npm scripts, and dependencies. It defines commands such as npm run dev and npm run build, along with the versions of Next.js and React.",
  },
  {
    name: "tsconfig.json",
    description:
      "Contains the TypeScript compiler configuration. It controls type checking, how modules are resolved, and path aliases such as @/*.",
  },
];

export default function AboutProjectPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12 font-sans sm:px-8 sm:py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          About This Next.js Project
        </h1>
        <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
          This Level 1 project uses Next.js 16, TypeScript, and the App Router.
          This page is a Server Component and introduces the main folders and
          configuration files in our workspace.
        </p>
      </header>

      <section aria-labelledby="project-structure">
        <h2 id="project-structure" className="mb-4 text-2xl font-semibold">
          Main Folders and Configuration Files
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projectFiles.map((file) => (
            <article
              key={file.name}
              className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
            >
              <h3 className="text-lg font-semibold">
                <code>{file.name}</code>
              </h3>
              <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
                {file.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="other-code" className="mt-10">
        <h2 id="other-code" className="text-2xl font-semibold">
          Where Other Code Would Live
        </h2>
        <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
          These are common folder conventions. The components/ folder now holds
          shared UI. The lib/ folder contains our local course and product data.
        </p>
        <dl className="mt-5 space-y-5">
          <div>
            <dt className="font-mono text-lg font-semibold">components/</dt>
            <dd className="mt-2 leading-7 text-zinc-600 dark:text-zinc-400">
              Reusable UI shared across pages lives here. This project uses
              PageHeader, Navbar, and NavLink components.
            </dd>
          </div>
          <div>
            <dt className="font-mono text-lg font-semibold">lib/</dt>
            <dd className="mt-2 leading-7 text-zinc-600 dark:text-zinc-400">
              Utilities, helper functions, services, database access, and
              server-side utilities would normally live here. A general helper
              might format a date, while a server-only module might load courses
              from a database.
            </dd>
          </div>
        </dl>
        <p className="mt-6 rounded-xl bg-zinc-100 p-5 leading-7 dark:bg-zinc-900">
          <strong>Keep server-only code private.</strong> Sensitive database and
          service logic must stay on the server and must not be imported into
          Client Components. The lib/ folder name alone does not enforce this.
          Only safe, necessary data should be passed to the client; credentials
          and secrets must never be exposed.
        </p>
      </section>
    </main>
  );
}
