import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import { 
  Database, 
  BarChart3, 
  Cloud, 
  Smartphone, 
  Users, 
  Globe, 
  CheckCircle, 
  ArrowRight 
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Database,
      title: "Data Warehouse & BI",
      description: "Comprehensive data warehousing and business intelligence solutions"
    },
    {
      icon: BarChart3,
      title: "Big Data Analytics",
      description: "Advanced analytics and data visualization for better insights"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native mobile applications for Android and iOS platforms"
    },
    {
      icon: Cloud,
      title: "SAP Solutions",
      description: "SAP modules including FICO, BI, BASIS, and ABAP"
    }
  ];

  const achievements = [
    { number: "45+", label: "IT Corporate Clients" },
    { number: "5000+", label: "Trained Learners" },
    { number: "15", label: "Technologies" },
    { number: "7", label: "Countries Served" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="text-primary border-primary">
              Since 2010 • Global IT Solutions
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
              Becoming the leader in{" "}
              <span className="text-primary">Next Gen IT</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Mobile, Social, Cloud and Big Data
            </p>
            <p className="text-base max-w-2xl mx-auto text-muted-foreground leading-relaxed">
              Phoenix IT Consulting is the consulting arm of Axiom Semantics, providing 
              comprehensive IT solutions and training services globally since 2010.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Global IT Consulting Excellence
              </h2>
              <p className="text-lg text-muted-foreground">
                Founded and grown by industry experts with experience in India, Singapore, 
                and the US, we serve clients across India, Dubai, Bahrain, Singapore, 
                Malaysia, Canada, and the United States.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Consulting arm of pioneer skill development company Axiom Semantics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Providing IT solutions since 2010</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Industry experts experienced in India, Singapore & US</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions covering the latest technologies and methodologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
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
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Global Presence</h2>
              <p className="text-lg text-muted-foreground">
                Serving clients across multiple countries with offshore development centers
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>Dubai</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>Bahrain</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>Singapore</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>Malaysia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>Canada</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>United States</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Get in touch with our experts to discuss your next project and 
              discover how we can help accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Started</Link>
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

export default Index;
