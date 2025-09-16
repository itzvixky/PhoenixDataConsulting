import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Calendar, 
  Globe, 
  Target, 
  Eye, 
  Users 
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const heroAnimation = useScrollAnimation();
  const storyAnimation = useScrollAnimation();
  const visionAnimation = useScrollAnimation();
  const presenceAnimation = useScrollAnimation();
  const timelineAnimation = useScrollAnimation();

  const milestones = [
    { year: "2010", event: "Company Founded", description: "Established as consulting arm of Axiom Semantics" },
    { year: "2012", event: "Global Expansion", description: "Extended services to Singapore and Middle East" },
    { year: "2015", event: "Technology Growth", description: "Scaled from 2 to 15 technologies" },
    { year: "2020", event: "5000+ Learners", description: "Achieved milestone of training 5000+ professionals" },
    { year: "2023", event: "45+ Clients", description: "Serving 45+ IT corporate clients globally" }
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
              About Phoenix Data Consulting
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight">
              Leading the Future of <span className="text-primary">IT Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Consulting arm of the pioneer skill development company Axiom Semantics
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 lg:py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div 
              ref={storyAnimation.ref}
              className={`space-y-4 transition-all duration-700 ease-out delay-200 ${
                storyAnimation.isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold">Our Story</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Phoenix Data Consulting was founded and grown by industry experts with 
                extensive experience across India, Singapore, and the United States. 
                Since 2010, we have been providing cutting-edge IT solutions to clients worldwide.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                As the consulting arm of Axiom Semantics, a pioneer in skill development, 
                we bring deep expertise in next-generation technologies including Mobile, 
                Social, Cloud, and Big Data solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 space-y-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold">Since 2010</h3>
                    <p className="text-sm text-muted-foreground">Providing IT solutions</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 space-y-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold">7 Countries</h3>
                    <p className="text-sm text-muted-foreground">Global presence</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 space-y-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold">45+ Clients</h3>
                    <p className="text-sm text-muted-foreground">IT corporations</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 space-y-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold">5000+</h3>
                    <p className="text-sm text-muted-foreground">Trained learners</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-3">Our Vision</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    To become the leader in Next Gen IT model - Mobile, Social, Cloud and Big Data, 
                    delivering innovative solutions that transform businesses globally.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-3">Our Mission</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    To provide cost-effective, high-quality IT solutions and training services 
                    that empower organizations to leverage technology for competitive advantage 
                    and sustainable growth.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Global Presence</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We serve clients across multiple countries, providing localized support 
                with global expertise and industry best practices.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {["India", "Dubai", "Bahrain", "Singapore", "Malaysia", "Canada", "United States"].map((country) => (
                <Card key={country} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-medium">{country}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in our growth and expansion
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-center">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full"></div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{milestone.event}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;