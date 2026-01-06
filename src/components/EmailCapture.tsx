const EmailCapture = () => {
  return (
    <section className="section-container section-spacing border-t border-border">
      <div className="max-w-2xl">
        <h2 className="heading-section text-foreground mb-8">
          Get early access to RunSocials
        </h2>

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

        <p className="text-subtle text-center text-sm mt-4">
          No spam. We'll only email when beta spots open.
        </p>
      </div>
    </section>
  );
};

export default EmailCapture;
