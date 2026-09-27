export type Course = {
  slug: string;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  instructor: string;
  overview: string;
  topics: string[];
};

export const courses: Course[] = [
  {
    slug: "nextjs-basics",
    title: "Next.js Basics",
    description: "Learn file-based routing, shared layouts, and Server Components with the App Router.",
    category: "Web Frameworks",
    level: "Beginner",
    duration: "4 hours",
    instructor: "Learning Portal Team",
    overview: "Build a small multi-page application and understand how Next.js combines server rendering with focused client-side interactivity.",
    topics: ["Pages and nested layouts", "Dynamic routes and metadata", "Server and Client Components"],
  },
  {
    slug: "react-fundamentals",
    title: "React Fundamentals",
    description: "Practice building reusable components and passing data through props.",
    category: "UI Development",
    level: "Beginner",
    duration: "3 hours",
    instructor: "Learning Portal Team",
    overview: "Break an interface into small components. Learn how props describe content and how local state adds useful interactions.",
    topics: ["JSX and component composition", "Typed props and reusable UI", "State and event handlers"],
  },
  {
    slug: "typescript-basics",
    title: "TypeScript Basics",
    description: "Explore basic types, object shapes, and typed functions for JavaScript projects.",
    category: "Programming Languages",
    level: "Beginner",
    duration: "3 hours",
    instructor: "Learning Portal Team",
    overview: "Make JavaScript code easier to understand with explicit types. Practice describing data and catching common mistakes before running the application.",
    topics: ["Primitive types and arrays", "Object types and interfaces", "Function parameters and return types"],
  },
];

// Derive categories from the single course dataset.
export const categories = Array.from(new Set(courses.map((course) => course.category)));
