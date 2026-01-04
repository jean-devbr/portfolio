import { Github, Linkedin, Instagram, Youtube, Heart } from "lucide-react";

const Footer = () => {
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
              Full-Stack Developer specialized in building robust and scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#technologies" className="text-muted-foreground hover:text-primary transition-colors">
                Technologies
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Socials</h4>
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
            © {currentYear} {"Jean Costa"} • Made with <Heart className="h-4 w-4 text-primary fill-primary" /> and lots of code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
