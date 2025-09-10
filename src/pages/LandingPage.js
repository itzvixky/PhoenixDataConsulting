import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import cari from "../source/target.png";
import standard from "../source/standard.png";
import project from "../source/project.png";
import src from "../source/src.png";

const LandingPage = ({ courses }) => {
  const featuredCourses = courses.filter((course) => course.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="hero-title">Transform Data into Intelligence</h1>
          <p className="hero-subtitle">
            Phoenix Data Consulting provides expert-led training and consulting
            services in Data Warehouse, Business Intelligence, Big Data
            Analytics, and Cloud Technologies
          </p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn btn-primary">
              Explore Our Courses
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get Consultation
            </Link>
            <button
              onClick={() =>
                window.open(
                  "https://www.karpithal.com",
                  "_blank",
                  "noopener noreferrer"
                )
              }
              className="btn btn-accent"
            >
              Visit Karpithal.com
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">45+</div>
              <div className="stat-label">Corporate Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">950+</div>
              <div className="stat-label">Trained Professionals</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Why Choose Phoenix Data Consulting?</h2>
          <p className="section-subtitle">
            We provide comprehensive training and consulting services that
            deliver real results
          </p>

          <div className="feature-grid">
            <div className="card feature-card">
              <div className="feature-icon">
                <img src={cari} alt="Career-ready curriculum" />
              </div>
              <h3 className="feature-title">Career-ready Curriculum</h3>
              <p>
                Our courses are designed with industry needs in mind, ensuring
                you gain practical skills that employers value. 950+ graduates
                successfully placed in data roles.
              </p>
            </div>

            <div className="card feature-card">
              <div className="feature-icon">
                <img src={standard} alt="Industry tools" />
              </div>
              <h3 className="feature-title">Industry-Standard Tools</h3>
              <p>
                Learn using professional tools including Power BI, AWS, Azure,
                Tableau, and more. Gain hands-on experience with the
                technologies used in real-world projects.
              </p>
            </div>

            <div className="card feature-card">
              <div className="feature-icon">
                <img src={project} alt="Hands-on projects" />
              </div>
              <h3 className="feature-title">Hands-on Projects</h3>
              <p>
                85% of our curriculum is project-based learning. Build a
                portfolio of work that demonstrates your skills to potential
                employers.
              </p>
            </div>

            <div className="card feature-card">
              <div className="feature-icon">
                <img src={src} alt="Lifetime resources" />
              </div>
              <h3 className="feature-title">Lifetime Resources</h3>
              <p>
                Get continuous access to updated course materials, community
                support, and career guidance even after completing your
                training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Courses</h2>
          <p className="section-subtitle">
            Explore our most popular courses designed to advance your career in
            data and analytics
          </p>

          <div className="courses-grid">
            {featuredCourses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link to="/courses" className="btn btn-secondary">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ padding: "60px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title">Ready to Transform Your Career?</h2>
          <p className="section-subtitle">
            Join thousands of professionals who have advanced their careers with
            our expert-led training programs
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link
              to="/courses"
              className="btn btn-primary"
              style={{ marginRight: "1rem" }}
            >
              Browse Courses
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
