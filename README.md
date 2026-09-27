# Next.js Level 1

- Part A — 12/12 Completed
- Part B — 30/30 Completed
- Final Project — Completed
- Next.js Level 1 — Completed

## Project Overview

This repository is one Next.js 16.3.6 application using React 19.2.8, TypeScript, and the App Router. It contains Part A — Questions, Part B — 30 Challenges, and the Final Project — Learning & Course Catalog Portal. The completed challenge implementations remain available alongside the portal.

## Setup

From the project root, install dependencies and start development:

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js, normally `http://localhost:3000`. Stop the server with `Ctrl+C`. If Windows PowerShell blocks `npm.ps1`, use `npm.cmd` instead, for example `npm.cmd run dev`.

## Available Scripts

These scripts are defined in `package.json`:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server (`next dev`) |
| `npm run build` | Create the production build (`next build`) |
| `npm run start` | Start the production server after a successful build (`next start`) |
| `npm run lint` | Run ESLint (`eslint`) |

`npm start` is also valid for the start script.

## Workspace Navigation

The **Next.js Level 1** launcher stays visible at the top, including while scrolling. Its four controls are horizontal at normal desktop widths and wrap on smaller screens. The selected route renders below the launcher and separator; the launcher itself stays in the shared root layout.

- **Part A - Questions:** opens `/part-a`, displaying the existing questions and answers below the launcher.
- **Part B - Challenges:** opens `/part-b`, displaying all 30 selectable challenges. A challenge opens its existing demo or an information page at `/part-b/[challenge]`, still below the launcher.
- **Final Project:** opens `/final-project`, displaying the completed portal below the launcher.
- **Reset:** returns to `/`, whose page renders no content. This clears the area below the launcher without deleting or resetting project files or data.

The Final Project has its own navbar and footer within its portal layouts. Its navbar contains only:

**Home | Courses | Categories | About | Contact**

Home opens `/final-project`. The other portal URLs remain `/courses`, `/categories`, `/about`, and `/contact`, preserving the earlier challenge routes. Workspace section navigation is handled by the persistent launcher.

## Part A

All **12 questions and 12 answers are completed** in `Part_A/answers.md`. The `/part-a` Server Component reads this fixed learning document and displays the answers without changing the source file.

## Part B

All **30 challenges are completed**, and their working implementations are preserved. [Part_B/README.md](Part_B/README.md) indexes the 30 `Challenge_XX/README.md` documents. These folders contain documentation, not separate applications or copied source code. The browser selector uses `lib/challenges.ts` to link to existing demos and challenge details.

## Folder Structure

```text
Next-level-1/
├── Part_A/answers.md
├── Part_B/
│   ├── README.md
│   └── Challenge_01/ … Challenge_30/  # Each contains README.md
├── Final_Project/README.md
├── Screenshots/                       # Six preserved portal captures
├── app/
│   ├── layout.tsx                    # Persistent launcher + selected content
│   ├── page.tsx                      # Empty content for initial state/Reset
│   ├── globals.css
│   ├── part-a/                       # Answer page and Markdown presentation
│   ├── part-b/
│   │   ├── page.tsx                  # Challenge selector
│   │   └── [challenge]/page.tsx       # Challenge information
│   ├── final-project/                # Portal Home and portal layout
│   ├── courses/                      # Catalog, details, loading/error/layout
│   │   ├── [slug]/page.tsx
│   │   └── _components/CourseCard.tsx
│   ├── categories/
│   ├── (marketing)/                  # About and Contact
│   ├── (app)/dashboard/              # Nested dashboard layout/pages
│   ├── not-found.tsx
│   └── ...                           # Preserved Part B demo routes
├── components/                       # Shared UI and focused client boundaries
├── lib/                              # Course/product/index data and API helpers
├── public/                           # Images, icons, and downloadable assets
├── package.json
├── package-lock.json
└── README.md
```

Next.js App Router uses filesystem routing, so executable routes remain under `app/`. Shared implementation belongs in `components/`, `lib/`, and `public/`. `Part_A/`, `Part_B/`, and `Final_Project/` organize learning/submission documents. `Screenshots/` contains six current screenshots, refreshed after the final launcher/navigation changes. All six were opened and visually reviewed; they show the persistent horizontal launcher with no horizontal overflow.

## Server vs Client Architecture

Server Components remain the default. The root layout, workspace pages, portal pages, loading/not-found UI, Navbar, and Footer render on the server because their own content does not need browser state. Part A reads its fixed document on the server; the data examples fetch through `lib/public-api.ts`, which imports `server-only`. Private configuration is read server-side and displayed only as Loaded/Missing.

`WorkspaceLauncher` is a Server Component using `next/link`; route navigation needs no custom launcher state. `PortalLayout` is also a Server Component and composes the portal navbar, selected content, and footer. `app/layout.tsx` places selected route content beneath the launcher without making the route tree client-side.

The seven explicit Client Components are:

| Component | Why this boundary exists |
| --- | --- |
| NavLink | Reads the pathname to show the active navigation link |
| Counter | Uses local state for increment/decrement buttons |
| FavoriteButton | Uses local state for the favorite toggle |
| CourseExplorer | Handles local search, filters, result counts, and Clear Filters |
| ProductsError | Handles the Part B error-boundary reset action |
| CoursesError | Handles retrying the failed course segment |
| PublicConfig | Demonstrates a safe `NEXT_PUBLIC_` value included in browser code |

Client Components can still contribute to server-rendered initial HTML. Their browser code supports the focused interactions above. `CourseCard` has no client directive: it renders server-side on portal Home, but joins the client bundle when imported by CourseExplorer. It is not exclusively server-rendered.

## Three Decisions to Keep Client JavaScript Small

1. **Keep non-interactive rendering on the server.** The root layout, WorkspaceLauncher, PortalLayout, and pages remain Server Components; data fetching stays in server-only helpers instead of browser effects.
2. **Isolate browser behavior.** NavLink handles active navigation, Counter and FavoriteButton handle local state, and the error components handle recovery without converting their surrounding pages to Client Components.
3. **Pass safe, serializable data to focused interactive components.** The courses Server Component reads the shared dataset and passes course records to CourseExplorer, keeping page/data responsibility on the server and filtering inside the client boundary.

## Part B Progress

- Challenge 01 — Completed
- Challenge 02 — Completed
- Challenge 03 — Completed
- Challenge 04 — Completed
- Challenge 05 — Completed
- Challenge 06 — Completed
- Challenge 07 — Completed
- Challenge 08 — Completed
- Challenge 09 — Completed
- Challenge 10 — Completed
- Challenge 11 — Completed
- Challenge 12 — Completed
- Challenge 13 — Completed
- Challenge 14 — Completed
- Challenge 15 — Completed
- Challenge 16 — Completed
- Challenge 17 — Completed
- Challenge 18 — Completed
- Challenge 19 — Completed
- Challenge 20 — Completed
- Challenge 21 — Completed
- Challenge 22 — Completed
- Challenge 23 — Completed
- Challenge 24 — Completed
- Challenge 25 — Completed
- Challenge 26 — Completed
- Challenge 27 — Completed
- Challenge 28 — Completed
- Challenge 29 — Completed
- Challenge 30 — Completed

Visit [About This Next.js Project](http://localhost:3000/about-project) to explore the main folders, configuration files, and conventions for organizing future code.

## Route Groups

`app/(marketing)/` groups the About and Contact pages under a small shared layout. `app/(app)/` groups the dashboard, which keeps its nested dashboard layout. Parenthesized folder names do not appear in URLs: the routes remain `/about`, `/contact`, and `/dashboard`. The single root layout stays at `app/layout.tsx`.

## Colocation and Private Folders

`app/courses/_components/` is a private folder and does not create a URL route. Its original CourseCard entry now re-exports the single shared implementation in `components/CourseCard.tsx`. Home and the interactive CourseExplorer use that shared card. The private-folder example is preserved without duplicate card code.

## Final Project

Project: **Next.js Learning & Course Catalog Portal**

Status: **Completed**, including Phases 1–3 and the final audit. CourseExplorer provides local search/filtering, and the courses area has a scoped retry boundary alongside loading and custom 404 experiences. Core pages remain server-side.

Core routes: `/final-project`, `/courses`, `/courses/[slug]`, `/categories`, `/about`, and `/contact`. Actual course slugs are `nextjs-basics`, `react-fundamentals`, and `typescript-basics`. Contact is a non-submitting demo.

The seven intentional client boundaries are NavLink, ProductsError, Counter, FavoriteButton, PublicConfig, CourseExplorer, and CoursesError. Shared CourseCard renders server-side on Home and joins the client bundle beneath CourseExplorer. `lib/courses.ts` is the single source of course data.

Final verification passed: ESLint, production build, core and Part B runtime checks, search/filter cases, loading/error recovery, metadata, assets, environment security, and responsive checks at 375px and 1280px without horizontal overflow. Part A's checksum is unchanged. Six screenshots in `Screenshots/` were opened and validated. Documentation and cleanup were finalized on 2026-09-27, with lint/build rerun. No packages were added during final preparation.

See [Final Project documentation](Final_Project/README.md) for requirements, routes, architecture, and phase progress.

## Loading, Errors, and Component Boundaries

- **Challenge 13:** Navigate to `/courses` to see the accessible loading message before the course list. A clearly marked 1.5-second server-side delay runs at request time using `connection()`. Reload to repeat the demo if client navigation has cached the page.
- **Challenge 14:** Open `/products?error=true` to test the products error boundary. Try Again calls Next.js's `reset()`. The deliberate error stays active while that query is present; Return to products opens the normal list.
- **Challenge 15:** Try `/courses/not-a-real-course`, `/products/999`, or `/products/abc` to see the custom 404 with links to valid pages.
- **Challenge 16:** `/product-summary` is a Server Component. It reads the existing product data and calculates totals on the server. This summary logic does not need to be shipped as interactive browser JavaScript. The shared navigation still has its own small client boundary.
- **Challenge 17:** `/counter-demo` stays a Server Component and passes the serializable number `initialCount={0}` to `Counter`. Only the small Counter component uses `useState` to handle its buttons.

## Composition, Images, Fonts, and Metadata

- **Challenge 18:** `/product-feature` reads the existing product data on the server. Only `FavoriteButton` is interactive; it receives a boolean initial value and does not fetch product data.
- **Challenge 19:** The project-owned notebook illustration at `public/images/study-notebook.png` uses `next/image` for responsive optimized rendering, with alt text, dimensions, and a `sizes` hint.
- **Challenge 20:** Geist is loaded through `next/font/google` in the root layout and applied using its CSS variable. Next.js self-hosts the generated font files, so the browser does not request Google Fonts at runtime.
- **Challenge 21:** The root title template is `%s | Next.js Learning Portal`. About inherits the template. The portal Home preserves its absolute title after moving from `/` to `/final-project`; the launcher has its own title. Both pages have their own descriptions.
- **Challenge 22:** The dynamic course page uses `generateMetadata` with async params and the existing course dataset. Each course gets its own title and description; unknown slugs use `notFound()`.

## Assets, Styling, and Environment Variables

- **Challenge 23:** `/assets-demo` uses root-relative URLs for files in `public/`. It reuses the notebook image with `next/image`, adds a project-owned book icon, and links to a downloadable course outline.
- **Challenge 24:** `/styling-demo` uses global CSS for shared layout and typography, while `InfoCard.module.css` scopes its rules to InfoCard.
- **Challenge 25:** `/pricing` uses the existing Tailwind setup and reusable PricingCard components. Three example plans stack on mobile and form columns on desktop.
- **Challenge 26:** `/environment-demo` reads `COURSE_INTERNAL_TOKEN` only on the server and renders only Loaded/Missing, never the raw value. The demo configuration lives in ignored `.env.local`.
- **Challenge 27:** PublicConfig reads `NEXT_PUBLIC_PORTAL_NAME` in a small Client Component. Public values can be included in browser JavaScript and must never contain secrets. Restart development after changing environment values; rebuild to update public values in production.

## Server Data and Streaming

- **Challenge 28:** `/server-data` awaits five posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/guide/) in an async Server Component, without `useEffect`. Shared typed helpers in `lib/public-api.ts` check HTTP status and use an eight-second timeout. An accessible loading message appears while waiting, and failures show a friendly message.
- **Challenge 29:** `/data-dashboard` starts the users and posts requests together using `Promise.all`, avoiding a sequential network waterfall. Each section shows five sample records; these counts are sample sizes, not totals for the entire API.
- **Challenge 30:** `/streaming-demo` renders SlowDashboardSection behind Suspense. Only that server component waits 1.8 seconds at request time. The heading and accessible fallback can reach the browser earlier, making the page feel responsive while the details are prepared.

Final Part B verification passed: ESLint, production build, live API results, simulated HTTP/network failures, parallel request startup, browser streaming, and regression checks. No new Client Components were needed for Challenges 28–30.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
