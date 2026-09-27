"use client";

import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import type { Course } from "@/lib/courses";

export default function CourseExplorer({ courses }: { courses: Course[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  const categories = Array.from(new Set(courses.map((course) => course.category)));
  const levels = Array.from(new Set(courses.map((course) => course.level)));
  const query = search.trim().toLowerCase();
  const results = courses.filter((course) => {
    const searchableText = [course.title, course.description, ...course.topics]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(query)
      && (category === "" || course.category === category)
      && (level === "" || course.level === level);
  });

  function clearFilters() {
    setSearch("");
    setCategory("");
    setLevel("");
  }

  return (
    <section aria-labelledby="course-explorer-title">
      <h2 id="course-explorer-title" className="mb-5 text-xl font-semibold">Explore courses</h2>
      <div className="course-explorer-controls">
        <div>
          <label htmlFor="course-search">Search courses</label>
          <input
            id="course-search"
            type="search"
            placeholder="Search by title or topic..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="course-category">Category</label>
          <select id="course-category" value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="">All Categories</option>
            {categories.map((name) => <option key={name} value={name}>{name}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="course-level">Level</label>
          <select id="course-level" value={level} onChange={(event) => setLevel(event.target.value)}>
            <option value="">All Levels</option>
            {levels.map((name) => <option key={name} value={name}>{name}</option>)}
          </select>
        </div>
        <button type="button" onClick={clearFilters}>Clear Filters</button>
      </div>
      <p className="my-6" role="status" aria-live="polite" aria-atomic="true">
        {results.length} {results.length === 1 ? "course" : "courses"} found
      </p>
      {results.length > 0 ? (
        <ul className="catalog-grid">
          {results.map((course) => <CourseCard key={course.slug} course={course} />)}
        </ul>
      ) : (
        <div className="content-card">
          <h3 className="font-semibold">No courses match your current search and filters.</h3>
          <p>Try another topic or use Clear Filters above to see every course.</p>
        </div>
      )}
    </section>
  );
}
