const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-gradient-to-t from-card/50 to-background border-t border-border/50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="font-playfair text-3xl font-bold text-gradient mb-2">
            MEMOTRIX
          </h3>
          <p className="text-muted-foreground">
            Crafting Memories That Stay.
          </p>
        </div>
        
        <p className="text-sm text-muted-foreground">
          ©Memotrix — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
