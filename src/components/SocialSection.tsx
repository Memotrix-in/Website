import { Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";

const socials = [
  { icon: Instagram, label: "@memotrix", url: "https://instagram.com/memotrix_in", color: "from-pink-500 to-purple-600" },
  { icon: Facebook, label: "Memotrix Official", url: "https://www.facebook.com/share/1FUxHoj88U/", color: "from-blue-500 to-blue-700" },
  { icon: Linkedin, label: "Memotrix Company", url: "https://linkedin.com/company/memotrix", color: "from-blue-600 to-blue-800" },
  
];

const SocialSection = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-12 text-gradient">
          Follow Us
        </h2>
        
        <p className="text-xl text-muted-foreground mb-16">
          Stay connected and explore our world of emotions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 rounded-3xl hover:scale-110 transition-all duration-500 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                <social.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-foreground font-medium">
                {social.label}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
