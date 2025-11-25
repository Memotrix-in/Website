import { Sparkles, Heart, Gift, Package, Headphones, Users, Star, Award } from "lucide-react";

const reasons = [
  { icon: Sparkles, text: "Our gifts create a deep emotional connection" },
  { icon: Heart, text: "100% personalized experiences" },
  { icon: Gift, text: "Professional surprise planning" },
  { icon: Package, text: "Luxury packaging & storytelling" },
  { icon: Headphones, text: "Fast delivery + dedicated support" },
  { icon: Users, text: "Trusted by students, couples & families" },
  { icon: Star, text: "Our surprises are always unique and creatively designed" },
  { icon: Award, text: "Premium quality guarantee" },
];

const WhyChooseSection = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="py-32 px-6 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-playfair text-5xl md:text-6xl font-bold text-center mb-20">
          <span className="text-gradient">Why Choose</span>{" "}
          <span className="text-accent">MEMOTRIX</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent mb-4 flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              
              <p className="text-foreground font-medium leading-relaxed">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
