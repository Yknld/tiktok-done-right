const Footer = () => {
  return (
    <footer className="section-container py-12 border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-subtle text-sm">
          <span>TikTok only for now</span>
          <span className="hidden md:inline">·</span>
          <span>Built for small teams</span>
          <span className="hidden md:inline">·</span>
          <a 
            href="mailto:hello@runsocials.com" 
            className="hover:text-foreground transition-colors"
          >
            Questions? Contact us
          </a>
        </div>

        <div className="text-subtle text-sm">
          RunSocials
        </div>
      </div>
    </footer>
  );
};

export default Footer;
