import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Clock, 
  Zap, 
  Wifi, 
  Users, 
  Shield,
  Server,
  Monitor,
  CheckCircle
} from "lucide-react";

const Infrastructure = () => {
  const facilities = [
    {
      icon: Building2,
      title: "IT Park Location",
      description: "24x7 secured access to Information Technology park in the IT hub",
      features: ["Secure access control", "Professional environment", "Strategic location"]
    },
    {
      icon: Zap,
      title: "Power & Climate",
      description: "Power backup and fully air-conditioned workplace",
      features: ["Uninterrupted power supply", "Climate controlled environment", "Backup systems"]
    },
    {
      icon: Users,
      title: "Meeting Facilities",
      description: "State-of-the-art meeting rooms and fully equipped conference rooms",
      features: ["Modern conference rooms", "Video conferencing facilities", "Presentation equipment"]
    },
    {
      icon: Wifi,
      title: "Connectivity",
      description: "High speed internet connection with backup line",
      features: ["High-speed internet", "Redundant connections", "Reliable bandwidth"]
    },
    {
      icon: Monitor,
      title: "Computing Infrastructure",
      description: "Well configured computers with virus protection and secure access LAN",
      features: ["Latest hardware", "Security software", "Secure networking"]
    },
    {
      icon: Shield,
      title: "Security & Backup",
      description: "Complete equipped backup office for team expansion/DR purposes",
      features: ["Disaster recovery setup", "Data backup systems", "Security protocols"]
    }
  ];

  const advantages = [
    "Flexible for better scalability to accommodate more resources when project requires",
    "Professional IT park environment enhancing productivity", 
    "State-of-the-art infrastructure supporting latest technologies",
    "Redundant systems ensuring business continuity",
    "Secure and compliant working environment",
    "Easy accessibility for clients and team members"
  ];

  const specifications = [
    {
      category: "Power & Utilities",
      details: [
        "24x7 power backup systems",
        "Fully air-conditioned workspace",
        "Environmental controls",
        "UPS systems for critical equipment"
      ]
    },
    {
      category: "Connectivity & IT",
      details: [
        "High-speed internet connectivity",
        "Backup internet lines",
        "Secure LAN infrastructure", 
        "Wi-Fi connectivity throughout"
      ]
    },
    {
      category: "Security & Access",
      details: [
        "24x7 secured access control",
        "CCTV surveillance",
        "Visitor management system",
        "ID card access systems"
      ]
    },
    {
      category: "Facilities & Equipment",
      details: [
        "Modern workstations",
        "Conference rooms with A/V equipment",
        "Video conferencing facilities",
        "Printing and scanning facilities"
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
              Infrastructure
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              World-Class <span className="text-primary">IT Infrastructure</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              State-of-the-art facilities designed to support high-performance software development and delivery
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Facilities */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Core Infrastructure</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive infrastructure supporting all aspects of software development and client collaboration
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <facility.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{facility.title}</h3>
                  <p className="text-muted-foreground">{facility.description}</p>
                  <div className="space-y-2">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Advantages */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Infrastructure Advantages</h2>
              <p className="text-lg text-muted-foreground">
                Our infrastructure is designed to provide maximum flexibility, 
                security, and efficiency for software development operations.
              </p>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Access & Support</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Power Backup</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">Secure</div>
                  <div className="text-sm text-muted-foreground">Environment</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Server className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">Scalable</div>
                  <div className="text-sm text-muted-foreground">Infrastructure</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Specifications */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Infrastructure Specifications</h2>
            <p className="text-lg text-muted-foreground">
              Detailed breakdown of our technical infrastructure capabilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specifications.map((spec, index) => (
              <Card key={index}>
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold">{spec.category}</h3>
                  <div className="space-y-3">
                    {spec.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scalability & DR */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Scalability & Disaster Recovery</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our infrastructure is designed with scalability and business continuity in mind
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Scalable Team Expansion</h3>
                    <p className="text-muted-foreground mb-4">
                      Flexible infrastructure allowing rapid team scaling based on project requirements.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Modular workspace design</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Quick resource allocation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Equipment provisioning</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 space-y-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Disaster Recovery</h3>
                    <p className="text-muted-foreground mb-4">
                      Complete backup office equipped for team expansion and disaster recovery purposes.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Backup facility ready</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Data replication systems</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">Business continuity planning</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Infrastructure;