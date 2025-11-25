import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const ContactSection = ({ id }: { id?: string }) => {
  const email = "memotrixofficial@gmail.com";
  const handleMailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Try to open default mail client
    try {
      window.location.href = `mailto:${email}`;
      // Some browsers/OS may not open a mail client — still attempt clipboard fallback shortly
      setTimeout(() => {
        // no-op; keep for future telemetry if needed
      }, 500);
    } catch {
      // fallback: copy to clipboard
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          toast.success("Email copied to clipboard");
        }).catch(() => {
          toast.error(`Please copy this email: ${email}`);
        });
      } else {
        toast.error(`Please copy this email: ${email}`);
      }
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetPhone = "919345211194"; // include country code (India +91)
    const msg = `Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const encoded = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${targetPhone}?text=${encoded}`;
    try {
      window.open(waUrl, "_blank");
      toast.success("Opening WhatsApp...");
      setFormData({ name: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Could not open WhatsApp. Please copy your message and contact us manually.");
    }
  };

  return (
    <section id={id} className="py-32 px-6 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-playfair text-5xl md:text-6xl font-bold text-center mb-12 text-gradient">
          Let's Create Your Moment
        </h2>
        
        <p className="text-xl text-muted-foreground text-center mb-16">
          Share your vision, and we'll craft an unforgettable experience
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-2xl">
              <Mail className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Email Us</h3>
              <a
                href={`mailto:${email}`}
                onClick={handleMailClick}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {email}
              </a>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <MessageCircle className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">WhatsApp</h3>
              <a href="https://wa.me/919345211194" className="text-muted-foreground hover:text-primary transition-colors">
                Chat with us instantly
              </a>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">Location</h3>
              <p className="text-muted-foreground">Coimbatore, Tiruppur, Salem</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl">
            <div className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-border"
                />
              </div>

              <div>
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-background/50 border-border"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Tell us about your moment..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background/50 border-border resize-none"
                />
              </div>

              <Button type="submit" className="btn-premium w-full text-primary-foreground">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
