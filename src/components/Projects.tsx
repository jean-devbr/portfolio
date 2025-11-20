import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Ride Management System (Uber-like)",
    description: "Full REST API built with Spring Boot, Spring Security JWT, PostgreSQL, and driver-passenger matching.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    demo: null,
    github: "https://github.com/{{SEU_USUARIO}}/uber-clone-api",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop"
  },
  {
    title: "E-commerce with Microservices",
    description: "Microservices architecture with services for product, order, payment and user, plus an API Gateway.",
    technologies: ["Spring Boot", "Spring Cloud", "RabbitMQ", "MySQL"],
    demo: "https://ecommerce-demo.vercel.app",
    github: "https://github.com/{{SEU_USUARIO}}/ecommerce-microservices",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
  },
  {
    title: "Financial Management System",
    description: "Complete platform for personal and business finance management with advanced reports and dashboards.",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    demo: "https://finance-app-demo.vercel.app",
    github: "https://github.com/{{SEU_USUARIO}}/finance-management",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    title: "Multi-tenant Authentication API",
    description: "Robust authentication system with multi-tenant support, JWT, OAuth2 and permission management.",
    technologies: ["Java", "Spring Security", "Redis", "PostgreSQL"],
    demo: null,
    github: "https://github.com/{{SEU_USUARIO}}/auth-multitenant",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"
  },
  {
    title: "IoT Monitoring System",
    description: "Platform for collecting and analyzing IoT device data in real-time with automatic alerts.",
    technologies: ["Node.js", "MQTT", "InfluxDB", "Grafana"],
    demo: "https://iot-monitor-demo.vercel.app",
    github: "https://github.com/{{SEU_USUARIO}}/iot-monitoring",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop"
  },
  {
    title: "Online Booking Platform",
    description: "Complete booking system with calendar integration, notifications and online payments.",
    technologies: ["Spring Boot", "Angular", "PostgreSQL", "Stripe"],
    demo: "https://booking-platform-demo.vercel.app",
    github: "https://github.com/{{SEU_USUARIO}}/booking-platform",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container bg-card/30">
      <div className="text-center mb-16 space-y-4">
        <p className="text-primary text-sm font-semibold tracking-wide uppercase">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Some of the projects I have worked on throughout my career
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index}
            className="group bg-card border-border hover:border-primary/50 transition-all overflow-hidden hover-lift hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
          >
            <div className="relative overflow-hidden h-48">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex}
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="gap-2">
              {project.demo && (
                <Button 
                  size="sm"
                  className="flex-1 bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              )}
              <Button 
                size="sm"
                variant="outline"
                className={`${project.demo ? 'flex-1' : 'w-full'} border-primary/50 hover:bg-primary/10`}
                asChild
              >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
