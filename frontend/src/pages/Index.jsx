import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Database,
  BarChart3,
  Cloud,
  Smartphone,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Index = () => {
  const heroAnimation = useScrollAnimation();
  const introAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const presenceAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  const services = [
    {
      icon: Database,
      title: "Data Warehouse & BI",
      description:
        "Comprehensive data warehousing and business intelligence solutions",
    },
    {
      icon: BarChart3,
      title: "Big Data Analytics",
      description:
        "Advanced analytics and data visualization for better insights",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native mobile applications for Android and iOS platforms",
    },
    {
      icon: Cloud,
      title: "SAP Solutions",
      description: "SAP modules including FICO, BI, BASIS, and ABAP",
    },
  ];

  const achievements = [
    { number: "45+", label: "IT Corporate Clients" },
    { number: "5000+", label: "Trained Learners" },
    { number: "15", label: "Technologies" },
    { number: "7", label: "Countries Served" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-muted/30">
        <div className="container px-4" ref={heroAnimation.ref}>
          <div
            className={`max-w-4xl mx-auto text-center space-y-6 transition-all duration-700 ${
              heroAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
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
              Phoenix Data Consulting is the consulting arm of Axiom Semantics,
              providing comprehensive IT solutions and training services
              globally since 2010. We're a subsidiary of{" "}
              <span className="text-primary font-medium">Karpithal</span>, a
              leading online learning platform similar to Udemy, empowering
              professionals with cutting-edge technology skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.karpithal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Karpithal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
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
        <div className="container" ref={introAnimation.ref}>
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              introAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Global IT Consulting Excellence
              </h2>
              <p className="text-lg text-muted-foreground">
                Founded and grown by industry experts with experience in India,
                Singapore, and the US, we serve clients across India, Dubai,
                Bahrain, Singapore, Malaysia, Canada, and the United States.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>
                    Consulting arm of pioneer skill development company Axiom
                    Semantics
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Providing IT solutions since 2010</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>
                    Industry experts experienced in India, Singapore & US
                  </span>
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
        <div className="container" ref={servicesAnimation.ref}>
          <div
            className={`text-center space-y-4 mb-12 transition-all duration-700 ${
              servicesAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions covering the latest technologies and
              methodologies
            </p>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${
              servicesAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
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
        <div className="container" ref={presenceAnimation.ref}>
          <div
            className={`text-center space-y-12 transition-all duration-700 ${
              presenceAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Global Presence
              </h2>
              <p className="text-lg text-muted-foreground">
                Serving clients across multiple countries with offshore
                development centers
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

      {/* Why Choose Us Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side: Image or graphic */}
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden animate-fade-in-scale">
              <img
                src="/IT-Consulting-Company.jpg"
                alt="Why choose us"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right side: Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Choose Phoenix Data Consulting?
              </h2>
              <p className="text-lg text-muted-foreground">
                We are committed to delivering cutting-edge solutions that drive
                your business forward. Our unique blend of expertise, global
                reach, and commitment to innovation sets us apart.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">Expert Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">Global Reach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">Innovative Solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">Client-Centric Approach</span>
                </div>
              </div>
              <Button asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container" ref={ctaAnimation.ref}>
          <div
            className={`text-center space-y-8 transition-all duration-700 ${
              ctaAnimation.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
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
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-black/90 hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link to="/odc">Learn About ODC</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Learn with Our Partner, Karpithal
              </h2>
              <p className="text-lg text-muted-foreground">
                As a subsidiary of Phoenix Data, **Karpithal** is an online
                learning platform similar to **Udemy**, offering a vast library
                of courses taught by industry experts. Empower your team with
                cutting-edge skills in IT, data, cloud, and more.
              </p>
              <Button size="lg" asChild>
                <a href="https://www.karpithal.com" target="_blank" rel="noopener noreferrer">
                  Visit Karpithal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden animate-fade-in-scale">
              <img
                src="/karpithal.png"
                alt="Online learning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;