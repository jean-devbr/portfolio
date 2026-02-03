import { Code2, Database, Server, Cloud, GitBranch, Container, Code, Smartphone, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const Technologies = () => {
  const { t } = useTranslation();
  const technologies = [
    { name: t('techJavaSpring'), icon: Code2, description: t('techJavaSpringDesc') },
    { name: t('techPostgresMysql'), icon: Database, description: t('techPostgresMysqlDesc') },
    { name: t('techDockerK8s'), icon: Container, description: t('techDockerK8sDesc') },
    { name: t('techAwsAzure'), icon: Cloud, description: t('techAwsAzureDesc') },
    { name: t('techGitCicd'), icon: GitBranch, description: t('techGitCicdDesc') },
    { name: t('techPython'), icon: Code, description: t('techPythonDesc') },
    { name: t('techFlutterDart'), icon: Smartphone, description: t('techFlutterDartDesc') },
    { name: t('techLinux'), icon: Terminal, description: t('techLinuxDesc') },
  ];

  return (
    <section id="technologies" className="section-container">
      <div className="text-center mb-16 space-y-4">
        <p className="text-primary text-sm font-semibold tracking-wide uppercase">
          {t('techStack')}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
          {t('technologiesTools')}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {t('techDescription')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <Card 
            key={index}
            className="group p-6 bg-card border-border hover:border-primary/50 transition-all hover-lift hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <tech.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                <p className="text-muted-foreground text-sm">{tech.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
