import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FoundersSection from "@/components/FoundersSection";
import SocialSection from "@/components/SocialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection id="about" />
      <ServicesSection id="services" />
      <WhyChooseSection id="why-choose" />
      <FoundersSection id="founders" />
      <SocialSection />
      <ContactSection id="contact" />
      <Footer />
    </div>
  );
};

export default Index;
