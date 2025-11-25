import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="w-20 h-20 md:w-20 md:h-20 m-0 p-0">
          <img src="/logo.png" alt="Memotrix logo" className="w-full h-full object-cover m-0 p-0 block" />
        </div>
       

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("why-choose")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection("founders")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Team
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-all"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
