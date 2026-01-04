import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LanguageSwitcher />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
