export type Challenge = {
  id: string;
  title: string;
  summary: string;
  files: string[];
  routes: string[];
};

// Documentation/index data only; implementations remain in their App Router locations.
export const challenges: Challenge[] = [
  {
    "id": "01",
    "title": "Initialize the Workspace",
    "summary": "One Next.js application with TypeScript, App Router, npm, ESLint, and production scripts.",
    "files": [
      "package.json",
      "tsconfig.json",
      "eslint.config.mjs",
      "next.config.ts"
    ],
    "routes": []
  },
  {
    "id": "02",
    "title": "Explore the App Router Structure",
    "summary": "A developer page explains the main folders and configuration files.",
    "files": [
      "app/about-project/page.tsx"
    ],
    "routes": [
      "/about-project"
    ]
  },
  {
    "id": "03",
    "title": "Build the Root Layout",
    "summary": "A typed root layout supplies html, body, English language, shared UI, and global CSS.",
    "files": [
      "app/layout.tsx",
      "app/globals.css"
    ],
    "routes": []
  },
  {
    "id": "04",
    "title": "Pages and File-System Routing",
    "summary": "About and Contact demonstrate pages mapped to public URLs; their content later became part of the portal.",
    "files": [
      "app/(marketing)/about/page.tsx",
      "app/(marketing)/contact/page.tsx"
    ],
    "routes": [
      "/about",
      "/contact"
    ]
  },
  {
    "id": "05",
    "title": "Shared Components",
    "summary": "PageHeader and navigation components are reused across pages.",
    "files": [
      "components/PageHeader.tsx",
      "components/Navbar.tsx"
    ],
    "routes": []
  },
  {
    "id": "06",
    "title": "Nested Layouts",
    "summary": "Dashboard, Profile, and Settings share a nested layout and sidebar.",
    "files": [
      "app/(app)/dashboard/layout.tsx",
      "app/(app)/dashboard/page.tsx"
    ],
    "routes": [
      "/dashboard",
      "/dashboard/profile",
      "/dashboard/settings"
    ]
  },
  {
    "id": "07",
    "title": "Active Navigation",
    "summary": "NavLink uses the pathname to highlight the current page or section.",
    "files": [
      "components/NavLink.tsx",
      "components/Navbar.tsx"
    ],
    "routes": []
  },
  {
    "id": "08",
    "title": "Dynamic Course Routes",
    "summary": "Course pages await the slug parameter and read the shared course dataset.",
    "files": [
      "app/courses/[slug]/page.tsx",
      "lib/courses.ts"
    ],
    "routes": [
      "/courses/nextjs-basics",
      "/courses/react-fundamentals",
      "/courses/typescript-basics"
    ]
  },
  {
    "id": "09",
    "title": "Dynamic Product Routes",
    "summary": "Product pages validate numeric IDs and display local product records.",
    "files": [
      "app/products/page.tsx",
      "app/products/[id]/page.tsx",
      "lib/products.ts"
    ],
    "routes": [
      "/products",
      "/products/1",
      "/products/2",
      "/products/3"
    ]
  },
  {
    "id": "10",
    "title": "Search Parameters Basics",
    "summary": "The products Server Component awaits searchParams and displays category and query defaults or supplied values.",
    "files": [
      "app/products/page.tsx"
    ],
    "routes": [
      "/products?category=electronics&q=phone",
      "/products"
    ]
  },
  {
    "id": "11",
    "title": "Route Groups",
    "summary": "Marketing pages and dashboard routes are grouped without changing their URLs.",
    "files": [
      "app/(marketing)/layout.tsx",
      "app/(app)/dashboard/layout.tsx"
    ],
    "routes": []
  },
  {
    "id": "12",
    "title": "Private Folders and Colocation",
    "summary": "The private course folder preserves a re-export of the shared CourseCard without creating a public route or duplicate card.",
    "files": [
      "app/courses/_components/CourseCard.tsx",
      "components/CourseCard.tsx"
    ],
    "routes": []
  },
  {
    "id": "13",
    "title": "Loading UI",
    "summary": "An accessible loading message appears during the intentional request-time course delay. Reload to observe the demonstration.",
    "files": [
      "app/courses/loading.tsx",
      "app/courses/page.tsx"
    ],
    "routes": [
      "/courses"
    ]
  },
  {
    "id": "14",
    "title": "Error Boundaries",
    "summary": "The products error query triggers a safe boundary. Try Again resets it; Return to products removes the deliberate error query.",
    "files": [
      "app/products/error.tsx",
      "app/products/page.tsx"
    ],
    "routes": [
      "/products?error=true"
    ]
  },
  {
    "id": "15",
    "title": "Custom Not Found",
    "summary": "Unknown routes and invalid records use a shared custom 404 with recovery links.",
    "files": [
      "app/not-found.tsx",
      "app/courses/[slug]/page.tsx",
      "app/products/[id]/page.tsx"
    ],
    "routes": [
      "/courses/does-not-exist",
      "/products/999"
    ]
  },
  {
    "id": "16",
    "title": "Server Components",
    "summary": "Product totals are calculated on the server from the existing dataset.",
    "files": [
      "app/product-summary/page.tsx",
      "lib/products.ts"
    ],
    "routes": [
      "/product-summary"
    ]
  },
  {
    "id": "17",
    "title": "Client Components",
    "summary": "A small Counter uses local state within a Server Component page.",
    "files": [
      "app/counter-demo/page.tsx",
      "components/Counter.tsx"
    ],
    "routes": [
      "/counter-demo"
    ]
  },
  {
    "id": "18",
    "title": "Server and Client Composition",
    "summary": "A server-rendered product feature contains a small interactive FavoriteButton.",
    "files": [
      "app/product-feature/page.tsx",
      "components/FavoriteButton.tsx"
    ],
    "routes": [
      "/product-feature"
    ]
  },
  {
    "id": "19",
    "title": "Image Optimization",
    "summary": "The local notebook image uses next/image with dimensions, alt text, and responsive sizes.",
    "files": [
      "app/product-feature/page.tsx",
      "public/images/study-notebook.png"
    ],
    "routes": [
      "/product-feature"
    ]
  },
  {
    "id": "20",
    "title": "Font Optimization",
    "summary": "The root layout loads Geist using next/font and applies its CSS variable globally.",
    "files": [
      "app/layout.tsx",
      "app/globals.css"
    ],
    "routes": []
  },
  {
    "id": "21",
    "title": "Static Metadata",
    "summary": "Root metadata and the title template support page-specific titles and descriptions. The preserved portal Home is now /final-project.",
    "files": [
      "app/layout.tsx",
      "app/final-project/page.tsx",
      "app/(marketing)/about/page.tsx"
    ],
    "routes": []
  },
  {
    "id": "22",
    "title": "Dynamic Metadata",
    "summary": "Course metadata awaits params and derives each title and description from shared course data.",
    "files": [
      "app/courses/[slug]/page.tsx",
      "lib/courses.ts"
    ],
    "routes": [
      "/courses/nextjs-basics"
    ]
  },
  {
    "id": "23",
    "title": "Static Assets from public/",
    "summary": "Root-relative image, icon, and download URLs reuse the local notebook asset.",
    "files": [
      "app/assets-demo/page.tsx",
      "public/icons/learning-icon.svg",
      "public/downloads/sample-course-outline.txt"
    ],
    "routes": [
      "/assets-demo"
    ]
  },
  {
    "id": "24",
    "title": "Global CSS vs CSS Modules",
    "summary": "Shared global styles coexist with an InfoCard CSS Module whose class names are scoped.",
    "files": [
      "app/styling-demo/page.tsx",
      "components/InfoCard.tsx",
      "components/InfoCard.module.css",
      "app/globals.css"
    ],
    "routes": [
      "/styling-demo"
    ]
  },
  {
    "id": "25",
    "title": "Tailwind Layout Exercise",
    "summary": "Three responsive pricing cards reuse PricingCard and the existing Tailwind setup.",
    "files": [
      "app/pricing/page.tsx",
      "components/PricingCard.tsx"
    ],
    "routes": [
      "/pricing"
    ]
  },
  {
    "id": "26",
    "title": "Private Environment Variable",
    "summary": "A server-only demo variable is read only to display Loaded/Missing, never its raw value.",
    "files": [
      "app/environment-demo/page.tsx",
      ".gitignore"
    ],
    "routes": [
      "/environment-demo"
    ]
  },
  {
    "id": "27",
    "title": "Public Environment Variable",
    "summary": "PublicConfig displays a safe NEXT_PUBLIC_ value and explains that public values must never contain secrets.",
    "files": [
      "components/PublicConfig.tsx",
      "app/environment-demo/page.tsx"
    ],
    "routes": [
      "/environment-demo"
    ]
  },
  {
    "id": "28",
    "title": "Server-Side Data Fetching",
    "summary": "An async Server Component awaits public API posts and handles request failures with a friendly message.",
    "files": [
      "app/server-data/page.tsx",
      "app/server-data/loading.tsx",
      "lib/public-api.ts"
    ],
    "routes": [
      "/server-data"
    ]
  },
  {
    "id": "29",
    "title": "Parallel Data Fetching",
    "summary": "Promise.all starts the independent users and posts requests together.",
    "files": [
      "app/data-dashboard/page.tsx",
      "lib/public-api.ts"
    ],
    "routes": [
      "/data-dashboard"
    ]
  },
  {
    "id": "30",
    "title": "Suspense and Streaming",
    "summary": "A page shell and accessible fallback render before a delayed server section streams in.",
    "files": [
      "app/streaming-demo/page.tsx",
      "components/SlowDashboardSection.tsx"
    ],
    "routes": [
      "/streaming-demo"
    ]
  }
];
