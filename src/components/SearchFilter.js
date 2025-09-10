// src/components/SearchFilter.js
import React, { useState } from "react";
import { domains, levels } from "../data/coursesData";

const SearchFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    domain: "All",
    level: "All",
    search: "",
  });

  const handleChange = (e) => {
    const newFilters = {
      ...filters,
      [e.target.name]: e.target.value,
    };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <div className="filter-container">
      <h3>Filter Courses</h3>
      <div className="filter-controls">
        <div className="filter-group">
          <input
            type="text"
            name="search"
            placeholder="Search courses..."
            value={filters.search}
            onChange={handleChange}
            className="search-input"
          />
        </div>
        <div className="filter-group">
          <select name="domain" value={filters.domain} onChange={handleChange}>
            {domains.map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <select name="level" value={filters.level} onChange={handleChange}>
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
