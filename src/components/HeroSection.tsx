import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn(`Section with id="${id}" not found.`);
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-40"/>
        
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-5xl sm:text-7xl md:text-9xl font-bold mb-6 text-gradient">
            MEMOTRIX
          </h1>
        </div>
        
        <div className="animate-fade-in-delay">
          <p className="text-2xl md:text-4xl text-muted-foreground mb-12 font-light tracking-wide">
            The Art of Memorable Experiences
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
          <Button
            type="button"
            className="btn-premium text-primary-foreground group"
            onClick={() => scrollToSection("services")}
            aria-label="Scroll to services"
          >
            Explore Our Services
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            type="button"
            variant="outline"
            className="glass-card border-2 px-8 py-6 text-lg hover:bg-card/50 transition-all duration-300"
            onClick={() => scrollToSection("contact")}
            aria-label="Scroll to contact"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-secondary/10 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default HeroSection;
