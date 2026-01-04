import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Sistema de Login",
    description: "Sistema de login desenvolvido usando HTML e CSS puro, sem necessidade de API.",
    technologies: ["HTML", "CSS"],
    demo: "https://jean-devbr.github.io/login/",
    github: "https://github.com/jean-devbr/login",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"
  },
  {
    title: "Clone do Spotify",
    description: "Clone do aplicativo Spotify desenvolvido usando HTML e CSS puro.",
    technologies: ["HTML", "CSS"],
    demo: "https://jean-devbr.github.io/Copia_Spotify/",
    github: "https://github.com/jean-devbr/Copia_Spotify",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop"
  },
  {
    title: "Desafio Java",
    description: "Projeto de desafio desenvolvido em Java.",
    technologies: ["Java"],
    demo: null,
    github: "https://github.com/jean-devbr/DesafioJava",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
  },
  {
    title: "Desafio Python",
    description: "Projeto de desafio desenvolvido em Python.",
    technologies: ["Python"],
    demo: null,
    github: "https://github.com/jean-devbr/desafio_python",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=600&fit=crop"
  },
  {
    title: "Clone Plataforma Anime",
    description: "Clone de uma plataforma de anime desenvolvido usando HTML e CSS.",
    technologies: ["HTML", "CSS"],
    demo: "https://jean-devbr.github.io/clonePlataformaAnime/",
    github: "https://github.com/jean-devbr/clonePlataformaAnime",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
  },
  // Aguarde o usuário enviar os projetos reais para adicionar aqui
];

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState("All");

  const filterOptions = ["All", "HTML + CSS Puro", "Java", "Python"];
  const filteredProjects = selectedTech === "All" 
    ? projects 
    : selectedTech === "HTML + CSS Puro" 
      ? projects.filter(p => p.technologies.includes("HTML") && p.technologies.includes("CSS"))
      : projects.filter(p => p.technologies.includes(selectedTech));

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

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {filterOptions.map(option => (
          <Button 
            key={option} 
            variant={selectedTech === option ? "default" : "outline"} 
            onClick={() => setSelectedTech(option)}
            className="mb-2"
          >
            {option}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
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
