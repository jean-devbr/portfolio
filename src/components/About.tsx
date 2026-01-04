const About = () => {
  return (
    <section id="about" className="section-container bg-card/30">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="order-2 lg:order-1 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-2xl"></div>
            <img 
              src="/imagem/jean.png" 
              alt="Jean Costa"
              className="relative w-full max-w-md rounded-2xl object-cover border-2 border-primary/20 shadow-xl"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="order-1 lg:order-2 space-y-6">
          <div>
            <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-2">
              Get to know
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
              About Me
            </h2>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              {"Hello! My name is Jean, I'm 22 years old and I'm from Rio de Janeiro. I'm a curious person, constantly learning, and I like to challenge myself to grow personally and professionally. I'm always looking for new opportunities and experiences that help me evolve and contribute to projects in a meaningful way."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="space-y-2">
              <p className="text-4xl font-bold gradient-text">5+</p>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold gradient-text">50+</p>
              <p className="text-muted-foreground">Completed Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
