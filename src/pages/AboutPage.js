import React from "react";

const AboutPage = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">About Phoenix Data Consulting</h1>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2>Our Mission</h2>
            <p>
              To empower professionals and organizations with the data skills
              needed to thrive in today's data-driven world. We believe that
              transforming raw data into actionable intelligence is the key to
              innovation and growth.
            </p>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <div>
              <h2>Our Story</h2>
              <p>
                Founded in 2015 by a team of data scientists and industry
                experts, Phoenix Data Consulting emerged from a shared
                frustration with the gap between academic data science and
                practical business applications. We've since grown into a
                premier destination for professionals seeking to enhance their
                data capabilities.
              </p>
            </div>

            <div>
              <h2>Our Approach</h2>
              <p>
                We combine theoretical foundations with real-world applications,
                ensuring our students not only understand concepts but can
                implement them effectively. Our courses are continuously updated
                to reflect the latest tools, techniques, and industry trends.
              </p>
            </div>

            <div>
              <h2>Our Instructors</h2>
              <p>
                Our team consists of industry practitioners with years of
                experience across various sectors including technology, finance,
                healthcare, and e-commerce. They bring real-world insights and
                practical knowledge to every course.
              </p>
            </div>
          </div>

          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <h2>Why the Name "Phoenix"?</h2>
            <p>
              Just as the phoenix rises transformed from its ashes, we help
              professionals and organizations transform their raw data into
              valuable intelligence—emerging stronger, smarter, and more
              competitive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
