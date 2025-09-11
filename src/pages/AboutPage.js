import React from "react";

const AboutPage = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">About Phoenix IT Consulting</h1>
        <p className="section-subtitle">
          Driving digital transformation since 2010 with expertise in Data, BI,
          Big Data, Cloud, and Enterprise IT solutions.
        </p>

        {/* Mission */}
        <div className="card" style={{ padding: "2rem", marginBottom: "3rem" }}>
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
            Our Mission
          </h2>
          <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            To deliver high-quality IT consulting, development, and training
            services that empower organizations to innovate, transform, and
            succeed in the era of Data, Cloud, and Emerging Technologies.
          </p>
        </div>

        {/* Story / Approach / Values */}
        <div className="feature-grid" style={{ marginBottom: "3rem" }}>
          <div className="card feature-card" style={{ padding: "2rem" }}>
            <h3 className="feature-title">Our Story</h3>
            <p>
              Phoenix IT Consulting is the consulting arm of Axiom Semantics,
              founded in 2010 by industry experts with experience in India,
              Singapore, and the US. We deliver IT solutions and training across
              India, Dubai, Bahrain, Singapore, Malaysia, Canada, and the USA.
            </p>
          </div>

          <div className="card feature-card" style={{ padding: "2rem" }}>
            <h3 className="feature-title">Our Approach</h3>
            <p>
              We combine technical expertise with practical implementation,
              offering services in Software Development, Data Warehousing,
              Business Intelligence, Big Data Analytics, Cloud, SAP, and Mobile
              Applications. Our flexible delivery models ensure cost-effective
              and scalable solutions worldwide.
            </p>
          </div>

          <div className="card feature-card" style={{ padding: "2rem" }}>
            <h3 className="feature-title">Our Values</h3>
            <p>
              We are guided by continuous skill development, international
              collaboration, and delivering measurable value. Strong
              partnerships, innovation, and smarter decision-making through data
              are at the heart of what we do.
            </p>
          </div>
        </div>

        {/* Leadership */}
        <div className="card" style={{ padding: "2rem", marginBottom: "3rem" }}>
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
            Our Leadership
          </h2>
          <p style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            Phoenix IT Consulting is led by experienced professionals with deep
            expertise in Data, BI, and Enterprise IT delivery.
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              textAlign: "center",
              fontWeight: "600",
              fontSize: "1.1rem",
              lineHeight: "2rem",
            }}
          >
            <li>Raja Bala – Chief Executive</li>
            <li>Baktha Kumar – Managing Director & Delivery Manager</li>
          </ul>
        </div>

        {/* Symbolism */}
        <div className="card" style={{ padding: "2rem" }}>
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
            Why the Name "Phoenix"?
          </h2>
          <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
            Just as the phoenix rises transformed from its ashes, we help
            organizations and professionals transform their raw data into
            actionable intelligence—emerging stronger, smarter, and more
            competitive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
