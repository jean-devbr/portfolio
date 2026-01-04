import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

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
              {t('getToKnow')}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text">
              {t('aboutMe')}
            </h2>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              {t('aboutDescription')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="space-y-2">
              <p className="text-4xl font-bold gradient-text">1+</p>
              <p className="text-muted-foreground">{t('yearsOfExperience')}</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold gradient-text">30+</p>
              <p className="text-muted-foreground">{t('completedProjects')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
