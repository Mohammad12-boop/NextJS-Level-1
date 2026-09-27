# Next.js Learning & Course Catalog Portal

## Project Overview

A beginner-friendly course catalog built with Next.js 16.3.6, React 19.2.8, TypeScript, and the App Router. It runs inside the existing Level 1 application. This folder contains submission documentation, not a separate app. Part A and all 30 Part B challenges are preserved.

## Main Features

- Home page, course catalog, categories, About, and a clearly labeled non-submitting Contact demo.
- Reusable navigation, footer, and course cards.
- Dynamic course details with course-specific metadata.
- Local search, category and level filters, combined filtering, result counts, empty state, and Clear Filters.
- Accessible loading messages, course error recovery, and a shared custom 404.
- Responsive layouts with Server Components by default.

The persistent **Next.js Level 1** launcher stays above the selected content, including while scrolling. Its controls are horizontal on desktop and wrap on smaller screens. Part A displays the existing questions and answers; Part B displays the challenge selector and existing demos. Final Project opens the portal at `/final-project` below the same launcher. Reset returns to `/` and clears the content area without deleting or resetting project data.

The portal keeps its own navbar and footer. Its navbar contains only **Home | Courses | Categories | About | Contact**. Home opens `/final-project`; the other portal and demo URLs remain unchanged. Workspace section navigation is provided by the launcher, without adding Client Components.

## Routes

| Route | Purpose |
| --- | --- |
| `/final-project` | Introduction, featured courses, and category links |
| `/courses` | Interactive course catalog |
| `/courses/nextjs-basics` | Next.js Basics details |
| `/courses/react-fundamentals` | React Fundamentals details |
| `/courses/typescript-basics` | TypeScript Basics details |
| `/categories` | Derived categories and course links |
| `/about` | Portal purpose and technologies |
| `/contact` | Labeled contact fields; submission disabled, nothing sent or saved |

Unknown URLs and invalid course slugs use the custom 404. Earlier challenge routes remain available; see the [root README](../README.md).

## Server vs Client Architecture

The root layout, core pages, Navbar, Footer, loading UI, and not-found UI remain Server Components because their own content needs no browser state. `WorkspaceLauncher` is a Server Component using `next/link`; `PortalLayout` is a Server Component composing the portal navbar, children, and footer. The root layout keeps the launcher outside the changing route content. The courses page passes safe, serializable records to CourseExplorer, a focused Client Island. It filters locally without browser fetching or reloads. The Part B fetching helpers in `lib/public-api.ts` are server-only.

The seven intentional client boundaries are:

| Component | Reason |
| --- | --- |
| NavLink | Pathname-based active navigation |
| ProductsError | Part B error-boundary reset |
| Counter | Local counter state |
| FavoriteButton | Local favorite state |
| PublicConfig | Safe public browser configuration example |
| CourseExplorer | Local search and filter state |
| CoursesError | Retry interaction for the failed course segment |

CourseCard is shared presentation: it renders on the server on Home and joins the client bundle beneath CourseExplorer. Small interactive boundaries avoid shipping page and server-data logic unnecessarily. No new client boundaries or packages were added during final preparation.

## Data

`lib/courses.ts` is the single typed course dataset: three courses, three categories, and one level, Beginner. Records contain slug, title, description, category, level, duration, instructor, overview, and topics. Categories and filter options derive from these records. Details and metadata use the same data.

`app/courses/_components/CourseCard.tsx` re-exports the shared card, preserving the Part B private-folder example without duplicate code.

## Next.js Features Used

Verified features include App Router pages, a single root layout, nested dashboard layout, route groups, private folders, `next/link`, async route/search parameters, Server/Client composition, static/dynamic metadata, `loading.tsx`, `error.tsx`, and `notFound()`.

Preserved Part B examples demonstrate optimized `next/image`, build-managed Geist through `next/font`, public assets/downloads, global CSS, CSS Modules, existing Tailwind styling, safe environment configuration, server-side fetching, parallel `Promise.all`, and scoped Suspense streaming.

The courses loading delay remains an intentional Part B demonstration. CoursesError uses the installed Next.js version's `retry()` API. No permanent course error trigger was added.

## Responsive Design

Core pages, every course detail, and loading/error/404 states passed browser checks at 375px and 1280px without horizontal overflow. Navigation, filters, cards, and the footer remain usable. Basic accessibility checks covered headings, labels, live messages, alt text, keyboard focus, links, and readable contrast.

## Running the Project

Run from the project root:

```bash
npm install
npm run dev
```

Open the local URL shown by Next.js, normally `http://localhost:3000`, then select Final Project. For production:

```bash
npm run build
npm run start
```

The available package scripts are `dev` (`next dev`), `build` (`next build`), `start` (`next start`), and `lint` (`eslint`). Run ESLint with `npm run lint`; `npm start` also runs the start script. Stop the server with `Ctrl+C`. If PowerShell blocks `npm.ps1`, use `npm.cmd` instead.

Optional environment demos use ignored root `.env.local`: `COURSE_INTERNAL_TOKEN` holds a made-up private demo value; `NEXT_PUBLIC_PORTAL_NAME` holds a safe public name. Only Loaded/Missing is shown for private configuration. Never put secrets in `NEXT_PUBLIC_` variables. Rebuild production after changing public configuration.

## Screenshots

The six screenshots are current and were visually reviewed after regeneration. All show the persistent horizontal launcher; the portal screenshots show only **Home | Courses | Categories | About | Contact** in the Final Project navbar. The Home capture shows `/final-project`, and the 404 capture shows the current recovery links.

Six actual application screenshots were captured with a consistent 1280px desktop viewport. Full-page heights vary with content. Each was opened and visually checked for the intended page, readable content, and absence of error overlays or private values.

- [01-home.png](../Screenshots/01-home.png)
- [02-courses.png](../Screenshots/02-courses.png)
- [03-course-detail.png](../Screenshots/03-course-detail.png)
- [04-categories.png](../Screenshots/04-categories.png)
- [05-course-search-filter.png](../Screenshots/05-course-search-filter.png): React + UI Development + Beginner, showing one result.
- [06-not-found.png](../Screenshots/06-not-found.png)

## Verification

The final audit verified:

- ESLint and production build, including TypeScript checks.
- Every core route and actual course slug, rendered metadata, and invalid-slug handling.
- Empty/exact/partial/case-insensitive/trimmed searches, description/topic matches, all actual categories/levels, combined filters, empty state, count, and reset without reload.
- Responsive behavior at 375px and 1280px, navigation, footer, labels, and keyboard focus.
- Course error fallback and retry using a temporary browser-only fault; no app code or saved bundle was altered.
- Part B regressions: products/search parameters, dashboard, counter/favorite, error recovery, assets/download, optimized images, fonts, scoped CSS, pricing, environment examples, fetching, and streaming.
- Live API results, simulated HTTP/network failures, parallel request startup, and streaming fallback arriving before delayed data.
- Private demo value absent from HTML/RSC and client assets; local environment files ignored and untracked; source/submission folders allowed by `.gitignore`.
- Part A: 12/12 answered, checksum unchanged. Part B: 30/30 verified.
- Six submission screenshots validated and preserved during finalization.

Final documentation and cleanup were completed on 2026-09-27. ESLint and production build were rerun after finalization. The temporary verification helper was removed and the test server stopped.

## Status

Phase 1 — Completed. Phase 2 — Completed. Phase 3 — Completed.

Final Project — Completed.

Next.js Level 1 — Completed. Level 2 has not started.
