import { Gift, Heart, BookOpen, Calendar, Archive, Package, Video } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Memory Story Books",
    description: "We design personalized storybooks based on your love, friendship, or career journey include with timelines, roadmaps, photos, and beautiful quotes to bring your memories to life.",
  },
  {
    icon: Gift,
    title: "Surprise Delivery Service",
    description: "Our team surprises your special person on their birthday, wedding day, or any special occasion even if you can’t be there.",
  },
  {
    icon: Heart,
    title: "Apology Delivery Service",
    description: "We deliver heartfelt apology messages, gifts, and surprises to your special person and help you say sorry in the sweetest way.",
  },
  {
    icon: Calendar,
    title: "Monthly Love Reminder Delivery",
    description: "Register your special days with us we’ll remind you and even handle the gifts and surprises if you need.",
  },
  {
    icon: Archive,
    title: "Time Capsule Box",
    description: "If you want to give a message or gift to your special person at a specific time—even if its one or two years later we’ll deliver it exactly when you wish",
  },
];

const ServicesSection = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="py-32 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-5xl md:text-6xl font-bold text-center mb-20 text-gradient">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-500 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
