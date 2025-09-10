import React, { useState } from "react";
import calendar from "../source/calendar.png";
import star from "../source/star.png";

const CourseCard = ({ course }) => {
  const [showModal, setShowModal] = useState(false);

  const handleLearnMore = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const redirectToKarpithal = () => {
    window.open("https://karpithal.com", "_blank", "noopener noreferrer");
  };

  return (
    <>
      <div className="card course-card">
        <div className="course-image">{course.title}</div>
        <div className="course-content">
          <div className="course-domain">{course.domain}</div>
          <h3 className="course-title">{course.title}</h3>
          <p className="course-description">{course.description}</p>
          <div className="course-meta">
            <span>
              <img src={calendar} alt="Duration" className="icon" />
              {course.duration}
            </span>
            <span>
              <img src={star} alt="Level" className="icon" />
              {course.level}
            </span>
          </div>
          <div className="course-action">
            <button
              onClick={handleLearnMore}
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Course Description Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{course.title}</h2>
              <button className="modal-close" onClick={handleCloseModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="course-domain">{course.domain}</div>
              <p className="course-full-description">
                {course.fullDescription}
              </p>

              <div className="course-details">
                <div className="detail-item">
                  <strong>Target Audience:</strong> {course.targetAudience}
                </div>
                <div className="detail-item">
                  <strong>Prerequisites:</strong> {course.prerequisites}
                </div>
                <div className="detail-item">
                  <strong>Duration:</strong> {course.duration}
                </div>
                <div className="detail-item">
                  <strong>Level:</strong> {course.level}
                </div>
              </div>

              <div className="course-modules">
                <h3>Course Modules</h3>
                <ul>
                  {course.modules.map((module, index) => (
                    <li key={index}>{module}</li>
                  ))}
                </ul>
              </div>

              <div className="course-tools">
                <h3>Tools & Technologies</h3>
                <div className="tools-list">
                  {course.tools.map((tool, index) => (
                    <span key={index} className="tool-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="course-projects">
                <h3>Hands-on Projects</h3>
                <ul>
                  {course.projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-actions">
                <button
                  onClick={redirectToKarpithal}
                  className="btn btn-primary"
                >
                  Learn More on Karpithal.com
                </button>
                <button
                  onClick={handleCloseModal}
                  className="btn btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseCard;
