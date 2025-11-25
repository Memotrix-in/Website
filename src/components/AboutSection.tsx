import { Heart } from "lucide-react";

const AboutSection = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <Heart className="w-16 h-16 text-primary animate-glow" style={{ filter: 'drop-shadow(0 0 20px hsl(var(--primary) / 0.3))' }} strokeLinejoin="round" strokeLinecap="round" />
        </div>
        
        <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-8 text-gradient">
          Who We Are
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p className="animate-fade-in">
            Memotrix turns your special moments into a beautiful experience whether it’s your special person’s birthday, proposing to your partner, or any kind of celebration
          </p>
          
          <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We specialize in surprise deliveries, memory storybooks, apology setups, love-reminder subscriptions, and time-capsule creations.
          </p>
          
          <p className="animate-fade-in font-semibold text-foreground text-2xl" style={{ animationDelay: "0.4s" }}>
            We also offers beautifully designed customized gifts that perfectly reflect your feelings to your special person
          </p>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
    </section>
  );
};

export default AboutSection;
