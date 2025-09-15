import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe, 
  TrendingDown, 
  Clock, 
  Users, 
  Shield, 
  Target,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const ODC = () => {
  const advantages = [
    {
      icon: Users,
      title: "Virtual Department",
      description: "Act as a virtual department of your organization with dedicated resources"
    },
    {
      icon: TrendingDown,
      title: "Cost Savings",
      description: "Significant overall cost savings compared to in-house teams"
    },
    {
      icon: Clock,
      title: "Faster Time to Market",
      description: "Shorter time to market by maximizing use of space, equipment and resources"
    },
    {
      icon: Shield,
      title: "High Quality",
      description: "High quality deliverables with rigorous quality assurance processes"
    },
    {
      icon: Target,
      title: "Scalability",
      description: "Team scalability based on project needs and requirements"
    },
    {
      icon: Globe,
      title: "Follow-the-Sun",
      description: "24/7 development cycle with follow-the-sun collaboration model"
    }
  ];

  const coreCompetencies = [
    "Data Warehouse Solutions",
    "Business Intelligence",
    "Big Data Analytics", 
    "Data Visualization",
    "Offshore Mobile Applications"
  ];

  const benefits = [
    "Clients can concentrate on core business rather than supporting processes",
    "Better planning of risk-mitigation factors",
    "Reduced operational and recruitment costs",
    "Access to latest technologies and expertise",
    "Flexible resource allocation",
    "Continuous technology upgrades"
  ];

  const models = [
    {
      type: "Onsite/Development Model",
      description: "Augment your existing Engineering teams",
      features: [
        "Direct integration with client teams",
        "On-site presence for critical phases",
        "Real-time collaboration",
        "Knowledge transfer facilitation"
      ]
    },
    {
      type: "Offshore Model", 
      description: "Act as your Delivery arm",
      features: [
        "Complete project ownership",
        "Independent delivery capability",
        "Cost-effective execution",
        "Scalable team structure"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="text-primary border-primary">
              Offshore Development Center
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Flexible Approach to <span className="text-primary">Global Software Delivery</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Our ODC model provides a cost-effective, scalable solution for your software development needs
            </p>
          </div>
        </div>
      </section>

      {/* ODC Advantages */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">ODC Advantages</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our Offshore Development Center model delivers multiple benefits for your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <advantage.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Primary Focus</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our core competencies around which we build our offshore development capabilities
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coreCompetencies.map((competency, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold">{competency}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Additional Benefits</h2>
              <p className="text-lg text-muted-foreground">
                Our ODC model provides comprehensive advantages that go beyond cost savings
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">45+</div>
                  <div className="text-sm text-muted-foreground">Corporate Clients</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Development Cycle</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">7</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ODC Models */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">ODC Models</h2>
            <p className="text-lg text-muted-foreground">
              Choose the model that best fits your project requirements
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {models.map((model, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{model.type}</h3>
                    <p className="text-lg text-muted-foreground">{model.description}</p>
                  </div>
                  <div className="space-y-3">
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
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
              Ready to Set Up Your ODC?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Let's discuss how our Offshore Development Center can accelerate 
              your project delivery while optimizing costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Discuss ODC Setup</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ODC;