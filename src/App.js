import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import CourseCatalog from "./pages/CourseCatalog";
import CourseDetail from "./pages/CourseDetail";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  const [courses] = useState([
    {
      id: 1,
      title: "Data Warehousing Technologies",
      domain: "College Training",
      description:
        "Comprehensive training in data warehousing concepts and implementation",
      fullDescription:
        "This course provides in-depth knowledge of data warehousing technologies including ETL processes, dimensional modeling, and data warehouse architecture. Students will learn to design, build, and maintain efficient data warehouses using industry-standard tools. The curriculum covers both theoretical concepts and practical implementation with hands-on projects.",
      targetAudience:
        "College students, IT professionals, database administrators",
      prerequisites: "Basic knowledge of databases and SQL",
      duration: "12 weeks",
      level: "Intermediate",
      modules: [
        "Introduction to Data Warehousing",
        "Dimensional Modeling",
        "ETL Processes and Tools",
        "Data Warehouse Architecture",
        "Performance Tuning",
        "Cloud Data Warehousing",
        "Capstone Project",
      ],
      tools: ["SQL Server", "Oracle", "Talend", "Informatica", "Snowflake"],
      projects: [
        "Design a data warehouse schema",
        "Build ETL pipelines",
        "Optimize query performance",
      ],
      featured: true,
    },
    {
      id: 2,
      title: "Business Intelligence Technologies",
      domain: "College Training",
      description:
        "Master BI tools and techniques for data visualization and reporting",
      fullDescription:
        "This course covers the complete spectrum of business intelligence technologies from data extraction to visualization. Students will learn to create interactive dashboards, reports, and data stories using leading BI tools. The curriculum emphasizes practical skills through real-world projects and case studies.",
      targetAudience: "Business analysts, data analysts, IT professionals",
      prerequisites: "Basic understanding of data concepts",
      duration: "10 weeks",
      level: "Intermediate",
      modules: [
        "BI Fundamentals",
        "Data Visualization Principles",
        "Dashboard Design",
        "Report Development",
        "Self-Service BI",
        "Advanced Analytics",
        "Real-world BI Project",
      ],
      tools: ["Power BI", "Tableau", "Qlik", "Looker", "Google Data Studio"],
      projects: [
        "Create sales dashboard",
        "Build financial reports",
        "Design executive dashboard",
      ],
      featured: true,
    },
    {
      id: 3,
      title: "Artificial Intelligence with Machine Learning",
      domain: "College Training",
      description:
        "Learn AI and ML algorithms and their practical applications",
      fullDescription:
        "This comprehensive course covers the fundamentals of artificial intelligence and machine learning. Students will learn about various ML algorithms, neural networks, deep learning, and their applications in real-world scenarios. The course includes hands-on projects to build and deploy ML models.",
      targetAudience: "Students, developers, data scientists",
      prerequisites: "Basic programming knowledge",
      duration: "14 weeks",
      level: "Advanced",
      modules: [
        "Introduction to AI and ML",
        "Supervised Learning",
        "Unsupervised Learning",
        "Neural Networks",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Capstone Project",
      ],
      tools: ["Python", "TensorFlow", "Keras", "Scikit-learn", "PyTorch"],
      projects: [
        "Predictive model",
        "Image classification",
        "Sentiment analysis",
      ],
      featured: true,
    },
    {
      id: 4,
      title: "Big Data Analytics",
      domain: "College Training",
      description:
        "Process and analyze massive datasets using modern big data technologies",
      fullDescription:
        "This course provides comprehensive training on big data technologies and analytics. Students will learn to work with massive datasets using tools like Hadoop, Spark, and NoSQL databases. The curriculum covers data processing, storage, and analysis techniques for big data applications.",
      targetAudience: "Data engineers, analysts, IT professionals",
      prerequisites: "Basic programming and database knowledge",
      duration: "12 weeks",
      level: "Advanced",
      modules: [
        "Introduction to Big Data",
        "Hadoop Ecosystem",
        "Spark Fundamentals",
        "NoSQL Databases",
        "Data Processing at Scale",
        "Real-time Analytics",
        "Big Data Project",
      ],
      tools: ["Hadoop", "Spark", "Kafka", "MongoDB", "Cassandra"],
      projects: [
        "Build data pipeline",
        "Process large datasets",
        "Implement real-time analytics",
      ],
      featured: false,
    },
    {
      id: 5,
      title: "SAP Modules",
      domain: "College Training",
      description:
        "Master SAP ERP system modules for business process management",
      fullDescription:
        "This course provides in-depth training on various SAP modules used in enterprise resource planning. Students will learn to implement, configure, and use SAP systems for business processes including finance, human resources, supply chain, and more.",
      targetAudience: "Business professionals, IT consultants, ERP specialists",
      prerequisites: "Basic business process knowledge",
      duration: "16 weeks",
      level: "Intermediate",
      modules: [
        "SAP Overview and Navigation",
        "Financial Accounting (FI)",
        "Controlling (CO)",
        "Materials Management (MM)",
        "Sales and Distribution (SD)",
        "Human Capital Management (HCM)",
        "SAP Implementation Project",
      ],
      tools: ["SAP GUI", "SAP HANA", "SAP Fiori", "SAP Business Warehouse"],
      projects: [
        "Configure SAP module",
        "Implement business process",
        "Generate business reports",
      ],
      featured: false,
    },
    {
      id: 6,
      title: "Mobile Application Development",
      domain: "College Training",
      description:
        "Build cross-platform mobile apps using NativeScript, Android & iOS",
      fullDescription:
        "This comprehensive course covers mobile application development for both Android and iOS platforms using NativeScript. Students will learn to create responsive, high-performance mobile apps that work across multiple devices. The curriculum includes UI design, API integration, and app deployment.",
      targetAudience: "Developers, students, aspiring mobile app developers",
      prerequisites: "Basic programming knowledge",
      duration: "14 weeks",
      level: "Intermediate",
      modules: [
        "Introduction to Mobile Development",
        "NativeScript Fundamentals",
        "UI Components and Layouts",
        "Data Management",
        "Device Features Integration",
        "Testing and Debugging",
        "Publishing to App Stores",
        "Capstone Mobile App Project",
      ],
      tools: [
        "NativeScript",
        "JavaScript/TypeScript",
        "Android Studio",
        "Xcode",
      ],
      projects: [
        "Build a utility app",
        "Create a social media app",
        "Develop an e-commerce app",
      ],
      featured: false,
    },
    {
      id: 7,
      title: "Power BI",
      domain: "Additional Courses",
      description:
        "Master Microsoft Power BI for data visualization and business intelligence",
      fullDescription:
        "This comprehensive Power BI course covers everything from basic report creation to advanced DAX formulas and data modeling. Students will learn to connect to various data sources, transform data, create interactive visualizations, and share insights across organizations.",
      targetAudience: "Business users, data analysts, report developers",
      prerequisites: "Basic Excel knowledge",
      duration: "6 weeks",
      level: "Beginner",
      modules: [
        "Power BI Interface",
        "Data Import and Transformation",
        "Data Modeling",
        "DAX Formulas",
        "Visualization Techniques",
        "Dashboard Design",
        "Sharing and Collaboration",
      ],
      tools: ["Power BI Desktop", "Power BI Service", "DAX", "Power Query"],
      projects: [
        "Sales performance dashboard",
        "Financial report",
        "Operational metrics dashboard",
      ],
      featured: true,
    },
    {
      id: 8,
      title: "Microsoft Azure Data Services",
      domain: "Additional Courses",
      description:
        "Learn to implement data solutions using Microsoft Azure services",
      fullDescription:
        "This course provides comprehensive training on Microsoft Azure data services. Students will learn to implement data storage, data processing, and data analytics solutions using Azure services like Azure SQL Database, Azure Data Lake, Azure Synapse Analytics, and Azure Databricks.",
      targetAudience:
        "Data engineers, cloud architects, database administrators",
      prerequisites: "Basic cloud computing knowledge",
      duration: "8 weeks",
      level: "Intermediate",
      modules: [
        "Azure Fundamentals",
        "Azure Data Storage",
        "Azure Data Factory",
        "Azure Synapse Analytics",
        "Azure Databricks",
        "Data Security in Azure",
        "Real-world Azure Project",
      ],
      tools: ["Azure Portal", "Azure Data Studio", "PowerShell", "Azure CLI"],
      projects: [
        "Build a data pipeline",
        "Implement data warehouse",
        "Create analytics solution",
      ],
      featured: false,
    },
    {
      id: 9,
      title: "AWS Data & Analytics",
      domain: "Additional Courses",
      description:
        "Master AWS data and analytics services for cloud-based solutions",
      fullDescription:
        "This course covers AWS data and analytics services including Amazon Redshift, Amazon Athena, Amazon EMR, and AWS Glue. Students will learn to design, build, and maintain scalable data solutions on AWS cloud platform.",
      targetAudience: "Data engineers, cloud architects, solutions architects",
      prerequisites: "Basic AWS knowledge",
      duration: "8 weeks",
      level: "Intermediate",
      modules: [
        "AWS Data Fundamentals",
        "Amazon Redshift",
        "Amazon Athena",
        "AWS Glue",
        "Amazon EMR",
        "Data Lakes on AWS",
        "Real-world AWS Project",
      ],
      tools: ["AWS Console", "Redshift", "Athena", "Glue", "EMR"],
      projects: [
        "Build data lake",
        "Create ETL pipeline",
        "Implement analytics solution",
      ],
      featured: false,
    },
  ]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage courses={courses} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/courses"
            element={<CourseCatalog courses={courses} />}
          />
          <Route
            path="/course/:id"
            element={<CourseDetail courses={courses} />}
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
