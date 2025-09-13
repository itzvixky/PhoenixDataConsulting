import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Building2, 
  Database, 
  BarChart3, 
  Brain,
  Smartphone,
  Settings,
  Users,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Training = () => {
  const trainingTypes = [
    {
      icon: GraduationCap,
      title: "College Training",
      description: "Comprehensive technology training programs for educational institutions",
      target: "Students & Faculty",
      approach: "Curriculum-based learning with hands-on projects"
    },
    {
      icon: Building2,
      title: "Corporate Training",
      description: "Professional development programs for IT companies and enterprises",
      target: "Working Professionals",
      approach: "Industry-focused training with real-world applications"
    }
  ];

  const technologies = [
    {
      icon: Database,
      title: "Data Warehousing Technologies",
      description: "Comprehensive training on ETL tools and data warehousing concepts",
      tools: ["Informatica PowerCenter", "DataStage", "SSIS", "Talend"],
      level: "Beginner to Advanced"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence Technologies", 
      description: "BI reporting, dashboards, and analytics platform training",
      tools: ["Cognos", "MicroStrategy", "OBIEE", "Crystal Reports"],
      level: "Beginner to Advanced"
    },
    {
      icon: Brain,
      title: "Artificial Intelligence with Machine Learning",
      description: "AI/ML concepts, algorithms, and practical implementation",
      tools: ["Python", "R", "TensorFlow", "Scikit-learn"],
      level: "Intermediate to Advanced"
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description: "Big data processing, analytics, and visualization techniques",
      tools: ["Hadoop", "Spark", "Hive", "Pig", "Kafka"],
      level: "Intermediate to Advanced"
    },
    {
      icon: Settings,
      title: "SAP Modules",
      description: "Comprehensive SAP training across multiple modules",
      tools: ["SAP FICO", "SAP BI", "SAP BASIS", "ABAP"],
      level: "Beginner to Advanced"
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description: "Native and cross-platform mobile app development",
      tools: ["Native Script", "Android SDK", "iOS SDK", "React Native"],
      level: "Beginner to Intermediate"
    }
  ];

  const trainingApproach = [
    "Technology Specific Experienced Trainers",
    "Continuous upgrade of technology skills",
    "Managed by Industry Experts", 
    "International Exposure",
    "Strong Industry Connections",
    "Smart HR working team with customized support"
  ];

  const achievements = [
    {
      number: "5000+",
      label: "Learners Trained",
      description: "Professionals from corporate sector"
    },
    {
      number: "45+",
      label: "Corporate Clients",
      description: "Companies we've provided training to"
    },
    {
      number: "15+",
      label: "Partner Colleges",
      description: "Educational institutions we work with"
    },
    {
      number: "6",
      label: "Core Technologies",
      description: "Specialized training areas"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="text-primary border-primary">
              Training Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Professional <span className="text-primary">Technology Training</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive training programs for both corporate professionals and college students
            </p>
          </div>
        </div>
      </section>

      {/* Training Types */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Training Programs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tailored training approaches for different learning environments and objectives
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <type.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{type.title}</h3>
                      <p className="text-primary font-medium">{type.target}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{type.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Training Approach:</h4>
                    <p className="text-muted-foreground">{type.approach}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Training Areas */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Technology Training Areas</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive coverage of cutting-edge technologies and industry tools
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <tech.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{tech.title}</h3>
                  <p className="text-muted-foreground text-sm">{tech.description}</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Tools & Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {tech.tools.map((tool, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">{tool}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Level:</span>
                      <span className="font-medium">{tech.level}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Training Approach</h2>
              <p className="text-lg text-muted-foreground">
                Our training methodology combines industry expertise with practical, 
                hands-on learning experiences.
              </p>
              <div className="space-y-4">
                {trainingApproach.map((approach, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{approach}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">{achievement.number}</div>
                    <div className="font-semibold">{achievement.label}</div>
                    <div className="text-sm text-muted-foreground">{achievement.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Institutions */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Partner Educational Institutions</h2>
              <p className="text-lg text-muted-foreground">
                Collaborating with leading colleges and universities for student training programs
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              {[
                "SRM Easwari",
                "PSGR Krishnammal College for Women", 
                "NGP Arts and Science College",
                "Sairam Engineering College",
                "TJS Engineering College",
                "Karpaga Vinayagar College of Engineering",
                "SMK Fomra Engineering College",
                "Tagore Engineering College",
                "Jaya Engineering College",
                "IFET Engineering College"
              ].map((college, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-sm font-medium">{college}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our Training?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Unique advantages that set our training programs apart from others
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <Users className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">Industry Expert Trainers</h3>
                  <p className="text-muted-foreground">Learn from professionals with real-world experience</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <BarChart3 className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">Practical Projects</h3>
                  <p className="text-muted-foreground">Hands-on experience with industry-relevant projects</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">Certification</h3>
                  <p className="text-muted-foreground">Industry-recognized certification upon completion</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Enhance Your Skills?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join our comprehensive training programs and advance your career 
              with cutting-edge technology skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Training;