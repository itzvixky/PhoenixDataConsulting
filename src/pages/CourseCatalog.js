import React, { useState } from "react";
import CourseCard from "../components/CourseCard";

const CourseCatalog = ({ courses }) => {
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique domains for filter
  const domains = ["All", ...new Set(courses.map((course) => course.domain))];
  const levels = ["All", ...new Set(courses.map((course) => course.level))];

  // Filter courses based on selected filters
  const filteredCourses = courses.filter((course) => {
    const matchesDomain =
      selectedDomain === "All" || course.domain === selectedDomain;
    const matchesLevel =
      selectedLevel === "All" || course.level === selectedLevel;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDomain && matchesLevel && matchesSearch;
  });

  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Our Course Catalog</h1>
        <p className="section-subtitle">
          Explore our comprehensive training programs designed for professionals
          at all levels
        </p>

        {/* Filters */}
        <div className="filter-container">
          <div className="filter-controls">
            <div className="filter-group">
              <input
                type="text"
                placeholder="Search courses..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="filter-group">
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
              >
                {domains.map((domain) => (
                  <option key={domain} value={domain}>
                    {domain === "All" ? "All Domains" : domain}
                  </option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level === "All" ? "All Levels" : level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="catalog-info">
          <p>
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="courses-grid">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>No courses match your filters</h3>
            <p>Try adjusting your search criteria or browse all courses</p>
            <button
              onClick={() => {
                setSelectedDomain("All");
                setSelectedLevel("All");
                setSearchQuery("");
              }}
              className="btn btn-primary"
              style={{ marginTop: "1rem" }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCatalog;
