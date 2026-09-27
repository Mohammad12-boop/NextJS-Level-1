# Next.js Level 1 — Part A

## Conceptual Questions

### Question 1

What is Next.js, and what does it add on top of React for building full-stack web applications?

**Answer:**

Next.js is a framework built on React. React mainly handles the UI through components, while Next.js adds features for building a complete application: routing, server rendering, support for Server Components, data fetching, and backend endpoints. It also provides image and font optimization, metadata for SEO, and standard ways to build and deploy the application. This lets us build the frontend and backend in one project.

### Question 2

What is the App Router? How does it differ conceptually from the older Pages Router?

**Answer:**

The App Router is the modern Next.js routing system used in our project. It organizes routes inside `app/`, supports shared and nested layouts, and uses Server Components by default. Special files such as `page.tsx`, `layout.tsx`, and `loading.tsx` define different parts of a route.

The older Pages Router uses `pages/`, where page files map to URLs. It uses different conventions for shared UI and server-side data fetching.

### Question 3

Explain the purpose of app/page.tsx and app/layout.tsx. What URL does each file influence?

**Answer:**

- `app/page.tsx` defines the page shown at the root URL, `/`.
- `app/layout.tsx` is the root layout. It wraps the route tree and provides shared UI and document structure, including `<html>` and `<body>`. In our project, it affects `/` and all routes added beneath it, such as `/about`. It does not create a separate URL.

### Question 4

How does file-system routing work in the App Router? Give examples of nested and dynamic routes.

**Answer:**

Folders inside `app/` normally represent URL segments. A `page.tsx` file defines the page for that route. Nested folders create nested paths, and square brackets mark a dynamic segment whose value comes from the URL.

| File | URL |
| --- | --- |
| `app/about/page.tsx` | `/about` |
| `app/dashboard/settings/page.tsx` | `/dashboard/settings` |
| `app/courses/[slug]/page.tsx` | `/courses/nextjs`, or another course slug |

For `/courses/nextjs`, the dynamic `slug` value is `"nextjs"`.

### Question 5

What is a Server Component, and why are components in the App Router Server Components by default?

**Answer:**

A Server Component runs and renders on the server, either during the build or when a request is handled. Its component code is not sent to the browser.

The App Router uses Server Components by default so pages can access server-side data, keep secrets and server logic away from the browser, and send less JavaScript. For example, a course list can read from a database on the server and send the rendered result to the browser. Client-side interactivity can be added where needed.

### Question 6

When is a Client Component required, and what does the "use client" directive actually define?

**Answer:**

A Client Component is needed for features such as `useState`, event handlers like `onClick`, `useEffect`, and browser APIs such as `localStorage`.

Placing `"use client"` at the top of a file, before imports, defines a boundary between server and client code. That file and the modules it imports become part of the client side of the application. Put the boundary as low in the component tree as practical, such as on a counter instead of the whole page.

Client Components can still be rendered into initial HTML on the server. Browser-only APIs should be accessed in an effect or event handler, rather than during that initial render. See the [Server and Client Components guide](https://nextjs.org/docs/app/getting-started/server-and-client-components).

### Question 7

What are loading.tsx, error.tsx, and not-found.tsx used for?

**Answer:**

- `loading.tsx` provides temporary UI, such as a spinner or skeleton, while the route's page and children are loading.
- `error.tsx` provides fallback UI for unexpected rendering errors in the route's page or children. It must be a Client Component and can offer a retry action. It does not catch errors in the layout of its own segment.
- `not-found.tsx` provides UI for missing content when `notFound()` is called, such as a course that does not exist. The root `app/not-found.tsx` also handles unmatched URLs.

### Question 8

What are route parameters and search parameters? How are params/searchParams handled in modern Next.js?

**Answer:**

Route parameters come from dynamic path segments. For `app/courses/[slug]/page.tsx`, visiting `/courses/nextjs` gives a `slug` of `"nextjs"`.

Search parameters come after `?` in the URL. In `?category=web&q=nextjs`, `category` is `"web"` and `q` is `"nextjs"`.

In Next.js 16, the page's `params` and `searchParams` props are promises. An async Server Component page must await them before reading their values. Inside that page, the basic pattern is:

```tsx
const { slug } = await params;
const { category, q } = await searchParams;
```

Their TypeScript prop types should use `Promise<...>`. A Client Component page can unwrap these promises with React's `use()` instead of being async. See the [page props reference](https://nextjs.org/docs/app/api-reference/file-conventions/page).

### Question 9

Why should you use next/image and next/font instead of implementing all image and font optimizations manually?

**Answer:**

`next/image` helps serve appropriately sized, optimized images and lazy-loads them by default. Giving images dimensions reserves space and reduces layout movement while they load.

`next/font` manages font loading and self-hosting, so the browser does not need to request fonts from an external font service. It also helps reduce layout shifts caused by font changes. Our starter already uses `next/image` and loads Geist through `next/font`.

These tools improve performance and layout stability while saving us from managing each optimization manually.

### Question 10

What is the Metadata API, and why are title, description, Open Graph data, robots, and sitemap information important?

**Answer:**

The Metadata API lets us describe pages using a `metadata` export or a `generateMetadata` function in a Server Component page or layout. Next.js adds the relevant tags to the page. It also supports metadata files such as `robots.ts` and `sitemap.ts`.

- **Title:** names the page in browser tabs and can appear in search results.
- **Description:** summarizes the page and may be used in search snippets.
- **Open Graph data:** controls details such as the title and image in social sharing previews.
- **Robots information:** gives crawlers instructions about crawling or indexing content; it is not access control.
- **Sitemap:** lists important URLs to help search engines discover pages.

### Question 11

How can a Server Component fetch data without useEffect? What advantages does server-side data fetching provide?

**Answer:**

A Server Component can be an `async` function and directly `await` a `fetch()` request or database query before returning its UI. It does not need `useEffect`, which runs on the client.

For example, a course page can load course details on the server and then render the course title. This gives direct access to server-side resources, keeps credentials on the server, and avoids unnecessary browser requests after the page loads. We can send only the UI and data the client needs, instead of sending database logic or full records. Anything rendered or passed to a Client Component must still be safe to share.

### Question 12

What is the difference between private environment variables and variables prefixed with NEXT_PUBLIC_?

**Answer:**

Private environment variables, such as `DATABASE_URL`, are server-only by default. They can hold configuration or credentials that should not be included in browser code.

Variables prefixed with `NEXT_PUBLIC_` can be included in client code and are visible to users. For example, `NEXT_PUBLIC_SITE_NAME` could contain a public site name. These values are normally inserted into the client bundle during the build.

Secrets must never use the `NEXT_PUBLIC_` prefix. We must also avoid exposing private values through rendered content, API responses, or props passed to Client Components.
