import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";

const LandingPage = ({ courses }) => {
  const featuredCourses = courses.filter((course) => course.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="hero-title">Transform Data into Intelligence</h1>
          <p className="hero-subtitle">
            Phoenix IT Consulting provides expert-led consulting, training, and
            development services in Data Warehouse, Business Intelligence, Big
            Data Analytics, Cloud, and Emerging Technologies.
          </p>
          <div className="hero-buttons">
            <Link to="/courses" className="btn btn-primary">
              Explore Our Courses
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get Consultation
            </Link>
            <a
              href="https://www.phoenixitac.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              Visit phoenixitac.com
            </a>
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
              <div className="stat-number">5000+</div>
              <div className="stat-label">Learners Trained</div>
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

      {/* Services Section */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive IT solutions, consulting, and training tailored to
            industry needs.
          </p>

          <div className="feature-grid">
            <div className="card feature-card">
              <h3 className="feature-title">Development</h3>
              <p>
                Software development in Data Warehouse, BI, Big Data Analytics,
                Data Visualization, SAP, Mobile Apps, and AI/ML.
              </p>
            </div>

            <div className="card feature-card">
              <h3 className="feature-title">Consulting</h3>
              <p>
                Guidance in enterprise solutions, cloud, analytics, and IT
                strategy. End-to-end project delivery, product support, and
                offshore models.
              </p>
            </div>

            <div className="card feature-card">
              <h3 className="feature-title">Training</h3>
              <p>
                Corporate & college training programs across Data Warehousing,
                Business Intelligence, AI/ML, Big Data, SAP, and Mobile
                Application Development.
              </p>
            </div>

            <div className="card feature-card">
              <h3 className="feature-title">Offshore Development Center</h3>
              <p>
                High-quality global delivery with cost savings, scalable teams,
                24x7 collaboration, and strong infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Technology Expertise</h2>
          <p className="section-subtitle">
            Strong capabilities across Data, Cloud, and Emerging Tech.
          </p>

          <div className="feature-grid">
            {[
              "Informatica",
              "Talend",
              "SSIS",
              "IBM Cognos",
              "MicroStrategy",
              "OBIEE",
              "QlikView",
              "Tableau",
              "Hadoop",
              "AI / ML",
              "SAP Modules",
              "Oracle",
              "MS SQL Server",
              "MongoDB",
              "Cassandra",
            ].map((tech, idx) => (
              <div key={idx} className="card feature-card">
                <h3 className="feature-title">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section features">
        <div className="container">
          <h2 className="section-title">Our Clients</h2>
          <p className="section-subtitle">
            Trusted by leading enterprises & institutions worldwide.
          </p>
          <div className="feature-grid">
            {[
              "Wipro",
              "Accenture",
              "Cognizant",
              "Bank of America",
              "Infosys",
              "PayPal",
              "Dell",
              "Liberty Mutual",
              "Emirates NBD",
              "HCL",
              "Mphasis",
              "Hexaware",
            ].map((client, idx) => (
              <div key={idx} className="card feature-card">
                <h3 className="feature-title">{client}</h3>
              </div>
            ))}
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
            Phoenix IT Consulting’s expert-led training programs.
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
