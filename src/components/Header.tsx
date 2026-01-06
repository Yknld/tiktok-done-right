const Header = () => {
  return (
    <header className="section-container py-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-foreground text-lg tracking-tight">
          RunSocials
        </div>
        
        <nav className="flex items-center gap-6">
          <a 
            href="#pricing" 
            className="text-subtle hover:text-foreground text-sm transition-colors"
          >
            Pricing
          </a>
          <a 
            href="#waitlist" 
            className="text-sm font-medium text-primary hover:text-primary/90 transition-colors"
          >
            Join waitlist
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
