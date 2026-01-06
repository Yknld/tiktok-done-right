import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

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

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-4 bg-card border-border"
              required
            />
            <Button type="submit" size="lg" className="h-12 px-8">
              Join early access
            </Button>
          </form>
        ) : (
          <div className="bg-accent text-accent-foreground px-6 py-4 rounded-lg max-w-md">
            <p className="font-medium">You're on the list.</p>
            <p className="text-sm mt-1 opacity-80">We'll email you when spots open.</p>
          </div>
        )}

        <p className="text-subtle mt-4">
          We're onboarding a small beta. No payment required.
        </p>
      </div>
    </section>
  );
};

export default Hero;
