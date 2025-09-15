import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Database, 
  BarChart3, 
  Smartphone, 
  Settings, 
  Shield, 
  Users,
  Package,
  Headphones,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Database,
      title: "Data Warehouse & Business Intelligence",
      description: "Comprehensive DW/BI solutions using industry-leading technologies",
      features: [
        "Data Warehouse design and implementation",
        "ETL development and optimization", 
        "Business Intelligence reporting",
        "Data visualization and dashboards",
        "Production support and monitoring"
      ],
      technologies: ["Informatica PowerCenter", "Cognos", "MicroStrategy", "OBIEE", "Crystal Reports"]
    },
    {
      icon: BarChart3,
      title: "Big Data Analytics",
      description: "Advanced analytics solutions for large-scale data processing",
      features: [
        "Hadoop ecosystem implementation",
        "Real-time data processing",
        "Machine learning and AI solutions",
        "Data visualization platforms",
        "Analytics platform integration"
      ],
      technologies: ["Hadoop", "HDFS", "MapReduce", "Pig", "Hive", "Sqoop", "Scala", "Flume"]
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description: "Native mobile applications for iOS and Android platforms",
      features: [
        "Native iOS development",
        "Native Android development", 
        "Cross-platform solutions",
        "UI/UX design",
        "App store deployment"
      ],
      technologies: ["Native Script", "iOS SDK", "Android SDK", "React Native", "Flutter"]
    },
    {
      icon: Settings,
      title: "SAP Solutions",
      description: "Complete SAP module implementation and support",
      features: [
        "SAP FICO implementation",
        "SAP BI solutions",
        "SAP BASIS administration",
        "ABAP development",
        "SAP integration services"
      ],
      technologies: ["SAP FICO", "SAP BI", "SAP BASIS", "ABAP", "SAP Fiori"]
    }
  ];

  const additionalServices = [
    {
      icon: Package,
      title: "Product Development",
      description: "End-to-end product development with ongoing support and maintenance"
    },
    {
      icon: Shield,
      title: "RFID Integration",
      description: "RFID technology integration for inventory and asset management solutions"
    },
    {
      icon: Users,
      title: "User Management",
      description: "Comprehensive user and security management systems implementation"
    },
    {
      icon: Headphones,
      title: "Production Support",
      description: "24/7 production support for data warehouse and BI systems"
    }
  ];

  const projectModels = [
    {
      title: "Time & Material",
      description: "Flexible engagement model for evolving requirements",
      benefits: ["Flexible scope management", "Transparent billing", "Continuous collaboration"]
    },
    {
      title: "Fixed Bid",
      description: "Predictable pricing for well-defined project scope",
      benefits: ["Fixed cost and timeline", "Risk mitigation", "Clear deliverables"]
    },
    {
      title: "Onsite-Offshore",
      description: "Hybrid model combining onsite presence with offshore delivery",
      benefits: ["Cost optimization", "24/7 development cycle", "Local and global expertise"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Badge variant="outline" className="text-primary border-primary">
              Our Services
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
              Comprehensive <span className="text-primary">IT Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From software development to training services, we deliver excellence across all technology domains
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized expertise in cutting-edge technologies and proven methodologies
            </p>
          </div>
          <div className="space-y-12">
            {mainServices.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold">{service.title}</h3>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Key Features:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Additional Services</h2>
            <p className="text-lg text-muted-foreground">
              Supporting services to complete your technology ecosystem
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Models */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Project Delivery Models</h2>
            <p className="text-lg text-muted-foreground">
              Flexible engagement models to meet your specific needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectModels.map((model, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold">{model.title}</h3>
                  <p className="text-muted-foreground">{model.description}</p>
                  <div className="space-y-3">
                    {model.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Let's discuss how our expertise can help transform your business 
              with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/odc">Learn About ODC</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;