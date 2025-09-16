import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Users, 
  Award, 
  Briefcase, 
  GraduationCap,
  CheckCircle,
  Globe
} from "lucide-react";

const Team = () => {
  const heroAnimation = useScrollAnimation();
  const leadershipAnimation = useScrollAnimation();
  const teamStructureAnimation = useScrollAnimation();
  const valuesAnimation = useScrollAnimation();
  const techAnimation = useScrollAnimation();

  const leadership = [
    {
      name: "Raja Bala",
      position: "Chief Executive",
      description: "Leading the strategic vision and overall operations"
    },
    {
      name: "Baktha Kumar",
      position: "Managing Director & Delivery Manager",
      description: "Overseeing project delivery and client relationships"
    }
  ];

  const departments = [
    {
      name: "Srinivasa Raghavan",
      department: "Finance & Legal",
      description: "Managing financial operations and legal compliance"
    },
    {
      name: "Sowmiya",
      department: "Human Resource",
      description: "Talent acquisition and employee development"
    }
  ];

  const teamStructure = [
    {
      icon: Users,
      category: "Project Management",
      details: [
        "2 Project Managers (8 & 10 years experience)",
        "1 Delivery Director (7-8 years experience)",
        "2 Team/Project Leads (6 & 7 years experience)"
      ]
    },
    {
      icon: Briefcase,
      category: "DW & BI Development",
      details: [
        "6 Experienced DW&BI Resources (2-6 years)",
        "10 Well trained junior resources (0-2 years)",
        "Specialists in Informatica PowerCenter, Big Data Analytics, Business Intelligence"
      ]
    },
    {
      icon: GraduationCap,
      category: "Analytics & Visualization",
      details: [
        "6 Analytics & Visualization Developers",
        "Expertise in QlikView, Tableau, Power BI",
        "Advanced data visualization capabilities"
      ]
    },
    {
      icon: Award,
      category: "Application Development",
      details: [
        "2 Java & .NET Developers", 
        "2 Web Development specialists",
        "2 Cloud Computing experts"
      ]
    }
  ];

  const coreValues = [
    "Technology expertise",
    "Continuous upgrade of technology skills", 
    "Managed & supported by industry experts",
    "International exposure",
    "Strong industry connections",
    "Smart working team",
    "Partnership with DW&BI vendors"
  ];

  const trainingValues = [
    "Technology Specific Experienced Trainers",
    "Continuous upgrade of technology skills",
    "Managed by Industry Experts", 
    "International Exposure",
    "Strong Industry Connections",
    "Smart HR working team with customized support"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container" ref={heroAnimation.ref}>
          <div className={`max-w-4xl mx-auto text-center space-y-6 transition-all duration-700 ${heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="outline" className="text-primary border-primary">
              Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Experienced Professionals <span className="text-primary">Driving Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Our team consists of experienced professionals with 21+ years of experience 
              and junior to mid level experienced resources
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 lg:py-24">
        <div className="container" ref={leadershipAnimation.ref}>
          <div className={`text-center space-y-4 mb-12 transition-all duration-700 ${leadershipAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Industry veterans leading our strategic direction and operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{leader.name}</h3>
                    <p className="text-primary font-medium">{leader.position}</p>
                    <p className="text-muted-foreground mt-2">{leader.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Heads */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container" ref={teamStructureAnimation.ref}>
          <div className={`text-center space-y-4 mb-12 transition-all duration-700 ${teamStructureAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold">Department Heads</h2>
            <p className="text-lg text-muted-foreground">
              Specialized leaders managing key operational areas
            </p>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto transition-all duration-700 delay-200 ${teamStructureAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{dept.name}</h3>
                      <p className="text-primary font-medium">{dept.department}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-16 lg:py-24">
        <div className="container" ref={valuesAnimation.ref}>
          <div className={`text-center space-y-4 mb-12 transition-all duration-700 ${valuesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold">Team Structure</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive team structure covering all aspects of project delivery
            </p>
          </div>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${valuesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {teamStructure.map((team, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <team.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{team.category}</h3>
                  </div>
                  <div className="space-y-3">
                    {team.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Capabilities */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container" ref={techAnimation.ref}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${techAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Team Capabilities</h2>
              <p className="text-lg text-muted-foreground">
                Our team is equipped with extensive training and cross-platform expertise
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>All team members undergo vigorous training programs before joining project development</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Many resources are ready to be deployed onsite when required</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Resources trained and experienced in cross-platform technologies covering entire SDLC</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <Globe className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Global Deployment Ready</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our resources are prepared for international assignments and can seamlessly 
                    integrate with client teams worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
                <p className="text-lg text-muted-foreground">
                  The principles that guide our development and delivery teams
                </p>
              </div>
              <div className="space-y-4">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Training Values</h2>
                <p className="text-lg text-muted-foreground">
                  Our approach to continuous learning and skill development
                </p>
              </div>
              <div className="space-y-4">
                {trainingValues.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;