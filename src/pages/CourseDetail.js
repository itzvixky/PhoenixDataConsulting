import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="section">
        <div className="container">
          <h1>Course Not Found</h1>
          <p>The course you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  // Add JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: "Phoenix Data Consulting",
      sameAs: "https://karpithal.com",
    },
  };

  return (
    <div className="section">
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <div className="container">
        <div className="course-detail">
          <div className="course-main">
            <div className="course-header">
              <span className="course-domain">{course.domain}</span>
              <h1>{course.title}</h1>
              <div className="course-rating">
                <span>
                  <img
                    src="/assets/illustrations/level.svg"
                    alt="Level"
                    className="icon"
                  />
                  {course.level}
                </span>
                <span>
                  <img
                    src="/assets/illustrations/duration.svg"
                    alt="Duration"
                    className="icon"
                  />
                  {course.duration}
                </span>
              </div>
            </div>

            <div className="course-content">
              <div className="course-description">
                <h2>About This Course</h2>
                <p>{course.fullDescription}</p>
              </div>

              <div className="course-target">
                <h2>Target Audience</h2>
                <p>{course.targetAudience}</p>
              </div>

              <div className="course-prerequisites">
                <h2>Prerequisites</h2>
                <p>{course.prerequisites}</p>
              </div>

              <div className="course-outcomes">
                <h2>What You'll Learn</h2>
                <ul>
                  {course.modules.map((module, index) => (
                    <li key={index}>{module}</li>
                  ))}
                </ul>
              </div>

              <div className="course-tools">
                <h2>Tools & Technologies</h2>
                <div className="tools-list">
                  {course.tools.map((tool, index) => (
                    <span key={index} className="tool-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="course-projects">
                <h2>Hands-on Projects</h2>
                <ul>
                  {course.projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="course-sidebar">
            <div className="course-card">
              <div className="course-image">{course.title}</div>
              <div className="course-meta">
                <p>
                  <strong>Duration:</strong> {course.duration}
                </p>
                <p>
                  <strong>Level:</strong> {course.level}
                </p>
                <p>
                  <strong>Domain:</strong> {course.domain}
                </p>
              </div>

              <div className="course-action">
                <a
                  href="https://karpithal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Learn More
                </a>
              </div>

              <div className="course-contact">
                <p>For detailed course schedules & placements visit:</p>
                <a
                  href="https://karpithal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  karpithal.com
                </a>
                <p>Or contact us at:</p>
                <p>
                  <a href="tel:9344834879">9344834879</a> /{" "}
                  <a href="tel:8248424869">8248424869</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
