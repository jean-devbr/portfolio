import { Github, Linkedin, Instagram, Youtube, Heart } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              {"Jean Costa"}
            </h3>
            <p className="text-muted-foreground">
              {t('footerDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">{t('quickLinks')}</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                {t('about')}
              </a>
              <a href="#technologies" className="text-muted-foreground hover:text-primary transition-colors">
                {t('technologies')}
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                {t('projects')}
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                {t('contact')}
              </a>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">{t('socials')}</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/jean-costa-0040962b8/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/jean-devbr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/jeanooficial12/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@aprendendoComJean" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} {"Jean Costa"} • {t('madeWith')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
