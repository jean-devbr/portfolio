import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('loginSystem'),
      description: t('loginSystemDesc'),
      technologies: ["HTML", "CSS"],
      demo: "https://jean-devbr.github.io/login/",
      github: "https://github.com/jean-devbr/login",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop"
    },
    {
      title: t('spotifyClone'),
      description: t('spotifyCloneDesc'),
      technologies: ["HTML", "CSS"],
      demo: "https://jean-devbr.github.io/Copia_Spotify/",
      github: "https://github.com/jean-devbr/Copia_Spotify",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop"
    },
    {
      title: t('javaChallenge'),
      description: t('javaChallengeDesc'),
      technologies: ["Java"],
      demo: null,
      github: "https://github.com/jean-devbr/DesafioJava",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
    },
    {
      title: t('pythonChallenge'),
      description: t('pythonChallengeDesc'),
      technologies: ["Python"],
      demo: null,
      github: "https://github.com/jean-devbr/desafio_python",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=600&fit=crop"
    },
    {
      title: t('jordanStore'),
      description: t('jordanStoreDesc'),
      technologies: ["HTML", "CSS"],
      demo: "https://jean-devbr.github.io/Loja-Jordan/",
      github: "https://github.com/jean-devbr/Loja-Jordan",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop"
    },
    {
      title: t('blog'),
      description: t('blogDesc'),
      technologies: ["HTML", "CSS", "JavaScript"],
      demo: "https://jean-devbr.github.io/blog/",
      github: "https://github.com/jean-devbr/blog",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop"
    },
    {
      title: t('flutterLoginApp'),
      description: t('flutterLoginAppDesc'),
      technologies: ["Flutter", "Dart", "API"],
      demo: null,
      github: "https://github.com/jean-devbr/Login_flutter",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
    },
    {
      title: t('usuariosApi'),
      description: t('usuariosApiDesc'),
      technologies: ["Java", "Spring Boot", "API"],
      demo: null,
      github: "https://github.com/jean-devbr/usuarios-api",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
    },
    {
      title: t('rnClientProductCrud'),
      description: t('rnClientProductCrudDesc'),
      technologies: ["React Native", "Expo", "TypeScript", "SQLite", "API"],
      demo: null,
      github: "https://github.com/jean-devbr/rn-client-product-crud",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
    },
    // Wait for the user to send the real projects to add here
  ];

  const [selectedTech, setSelectedTech] = useState(t('all'));

  const filterOptions = [t('all'), t('pureHtmlCss'), t('apiIntegration'), "Java", "Python", "JavaScript"];
  const filteredProjects = selectedTech === t('all') 
    ? projects 
    : selectedTech === t('pureHtmlCss') 
      ? projects.filter(p => p.technologies.includes("HTML") && p.technologies.includes("CSS"))
      : selectedTech === t('apiIntegration')
        ? projects.filter(p => p.technologies.includes("API"))
      : projects.filter(p => p.technologies.includes(selectedTech));

  return (
    <section id="projects" className="section-container bg-card/30">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
          {t('featuredProjectsTitle')}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {t('featuredProjectsDescription')}
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
                    {t('viewDemo')}
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
                  {t('viewCode')}
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
