import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Database, 
  BarChart3, 
  Settings, 
  TrendingUp,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const heroAnimation = useScrollAnimation();
  const projectsAnimation = useScrollAnimation();
  const capabilitiesAnimation = useScrollAnimation();
  const techAnimation = useScrollAnimation();
  const summaryAnimation = useScrollAnimation();

  const majorProjects = [
    {
      icon: Clock,
      title: "ETL Process Optimization",
      client: "Major Hard Disk Manufacturing Company",
      description: "Re-designed the whole ETL process, reducing daily load window from 6 hours to 2.5 hours",
      impact: "58% reduction in processing time",
      technologies: ["ETL", "Data Warehouse", "Performance Optimization"]
    },
    {
      icon: DollarSign,
      title: "ETL Conversion Project",
      client: "Major Consumer Credit Company",
      description: "ETL conversion from AbInitio to Informatica, saving significant licensing and resource costs",
      impact: "Major cost savings on licensing and resources",
      technologies: ["AbInitio", "Informatica", "ETL Migration"]
    },
    {
      icon: Settings,
      title: "ERP Implementation",
      client: "USA's Second Largest Retailer",
      description: "Implemented comprehensive ERP solutions using PeopleSoft and Oracle",
      impact: "Complete ERP transformation",
      technologies: ["PeopleSoft", "Oracle", "ERP"]
    },
    {
      icon: BarChart3,
      title: "County DW&BI Project",
      client: "Government County Office",
      description: "Architected a Data Warehouse & BI project to monitor spending on public projects",
      impact: "Enhanced public project transparency",
      technologies: ["Data Warehouse", "Business Intelligence", "Public Sector"]
    }
  ];

  const capabilities = [
    {
      title: "QlikView Dashboard - Logistics",
      description: "Dashboard for a Dubai-based logistics company to improve port area operations",
      location: "Dubai, India",
      industry: "Logistics"
    },
    {
      title: "QlikView KPI Dashboard",
      description: "KPI Dashboard for a manufacturing major in Coimbatore to improve operating efficiency and reporting",
      location: "Coimbatore, India", 
      industry: "Manufacturing"
    },
    {
      title: "Master Data Management",
      description: "Web Services and Integration using .NET and Oracle for a Data Management Company",
      location: "Multiple Locations",
      industry: "Data Management"
    }
  ];

  const technologies = [
    {
      category: "Data Warehouse",
      tools: ["Informatica", "Talend", "SSIS", "DataStage"]
    },
    {
      category: "Business Intelligence", 
      tools: ["Cognos", "MicroStrategy", "OBIEE", "Crystal Reports"]
    },
    {
      category: "Analytics & Visualization",
      tools: ["QlikView", "Tableau", "Business Objects", "Power BI"]
    },
    {
      category: "Big Data",
      tools: ["Hadoop", "Spark", "Hive", "Pig", "Sqoop"]
    }
  ];

  const achievements = [
    "DW&BI solutions implemented in major technologies",
    "Multiple successful ETL conversions and optimizations",
    "Cross-industry experience spanning logistics, manufacturing, retail, and government",
    "Proven track record of cost optimization and performance improvement",
    "End-to-end project delivery capabilities"
  ];

  const projectSummary = [
    {
      metric: "On-time Delivery",
      value: "95%",
      description: "We consistently meet project deadlines with high-quality results."
    },
    {
      metric: "Client Satisfaction",
      value: "9/10",
      description: "Our commitment to client partnership is reflected in our high ratings."
    },
    {
      metric: "Cost Efficiency",
      value: "30% Avg. Savings",
      description: "Our solutions are designed to optimize costs without compromising on quality."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container px-4">
          <div 
            ref={heroAnimation.ref}
            className={`max-w-4xl mx-auto text-center space-y-4 transition-all duration-700 ease-out ${
              heroAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <Badge variant="outline" className="text-primary border-primary">
              Project Portfolio
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
              <span className="text-primary">Successful Projects</span> Delivered
            </h1>
            <p className="text-lg text-muted-foreground">
              Proven track record of delivering complex IT solutions across multiple industries
            </p>
          </div>
        </div>
      </section>

      {/* Major Projects */}
      <section className="py-12 lg:py-16">
        <div className="container px-4">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">Major Project Deliveries</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Highlighting some of our most impactful project implementations
            </p>
          </div>
          <div 
            ref={projectsAnimation.ref}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-700 ease-out ${
              projectsAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            {majorProjects.map((project, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-lg transition-all duration-300 ${
                  projectsAnimation.isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-heading font-bold">{project.title}</h3>
                      <p className="text-primary font-medium text-sm">{project.client}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-green-600 font-medium text-sm">{project.impact}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Capabilities */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Additional Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              Diverse project experience across industries and technologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-bold">{capability.title}</h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium">{capability.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Industry:</span>
                      <span className="font-medium">{capability.industry}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Technology Expertise</h2>
            <p className="text-lg text-muted-foreground">
              DW&BI solutions implemented in major technologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index}>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-center">{tech.category}</h3>
                  <div className="space-y-2">
                    {tech.tools.map((tool, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Achievements */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Project Achievements</h2>
              <p className="text-lg text-muted-foreground">
                Our project delivery excellence demonstrated through measurable results
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Database className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">100+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">15</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Settings className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">45+</div>
                  <div className="text-sm text-muted-foreground">Client Companies</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">7</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-base opacity-90 max-w-xl mx-auto">
              Let's discuss how our proven project delivery methodology 
              can help achieve your business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-black/50 hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Summary - New Section */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container px-4" ref={summaryAnimation.ref}>
          <div className={`text-center space-y-4 mb-8 transition-all duration-700 ease-out ${
            summaryAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold">Our Project Commitments</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              We focus on delivering tangible results, on time and within budget.
            </p>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ease-out delay-100 ${
            summaryAnimation.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            {projectSummary.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <div className="text-4xl font-bold text-primary">{item.value}</div>
                  <div className="text-lg font-semibold">{item.metric}</div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;