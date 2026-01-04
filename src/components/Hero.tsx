import { Download, Github, Linkedin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="section-container min-h-screen flex items-center justify-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Text Content */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="space-y-2">
            <p className="text-primary text-sm md:text-base font-semibold tracking-wide uppercase">
              Full-Stack Developer
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text">{"Jean Costa"}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {"Full-Stack Developer"}
            </p>
          </div>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-xl">
            {"Full-Stack developer focused on modern web applications, robust APIs, and best practices."}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
              asChild
            >
              <a href="/CurriculoJean.docx" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary"
              asChild
            >
              <a href="#contact">
                Contact Me
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a 
              href="https://www.linkedin.com/in/jean-costa-0040962b8/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/jean-devbr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.instagram.com/jeanooficial12/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="https://www.youtube.com/@aprendendoComJean" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Computer Emoji and Code Text Animation */}
        <div className="flex justify-center lg:justify-end">
          <div className="flex flex-col items-center space-y-6">
            {/* Pulsing Computer Emoji */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl"
            >
              💻
            </motion.div>
            
            {/* Typing Code Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-2xl font-mono font-bold text-primary"
            >
              &lt;/&gt; Code
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
