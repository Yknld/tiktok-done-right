const Hero = () => {
  return (
    <section className="section-container py-24 md:py-32 lg:py-40">
      <div className="max-w-2xl">
        <h1 className="heading-hero text-foreground mb-6">
          We run your TikTok posting for you.
        </h1>
        
        <p className="text-body mb-4">
          RunSocials handles account warm-up and daily TikTok posting so you can focus on building your product.
        </p>
        
        <p className="text-subtle mb-10">
          TikTok only · Organic posting · No ads
        </p>

        <div className="rounded-lg overflow-hidden bg-card border border-border">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSdHZaaJUFc3kZV_Dhz6cS6IPYpCwCRscs4HUxw9Hv2YiSNo7A/viewform?embedded=true" 
            width="100%" 
            height="931" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            className="w-full"
          >
            Loading…
          </iframe>
        </div>

        <p className="text-subtle mt-4">
          We're onboarding a small beta. No payment required.
        </p>
      </div>
    </section>
  );
};

export default Hero;
