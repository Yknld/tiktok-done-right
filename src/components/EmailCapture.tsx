import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EmailCapture = () => {
  const [formData, setFormData] = useState({
    email: "",
    promoting: "",
    country: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section className="section-container section-spacing border-t border-border">
        <div className="max-w-md">
          <div className="bg-accent text-accent-foreground px-8 py-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">You're on the waitlist.</h3>
            <p className="opacity-80">We'll reach out when beta spots open up.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-container section-spacing border-t border-border">
      <div className="max-w-md">
        <h2 className="heading-section text-foreground mb-8">
          Get early access to RunSocials
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-12 px-4 bg-card border-border"
              required
            />
          </div>

          <div>
            <Textarea
              placeholder="What are you promoting? (optional)"
              value={formData.promoting}
              onChange={(e) => setFormData({ ...formData, promoting: e.target.value })}
              className="px-4 py-3 bg-card border-border resize-none"
              rows={2}
            />
          </div>

          <div>
            <Input
              type="text"
              placeholder="Country you want to target (optional)"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className="h-12 px-4 bg-card border-border"
            />
          </div>

          <Button type="submit" size="lg" className="w-full h-12">
            Join the waitlist
          </Button>

          <p className="text-subtle text-center text-sm">
            No spam. We'll only email when beta spots open.
          </p>
        </form>
      </div>
    </section>
  );
};

export default EmailCapture;
