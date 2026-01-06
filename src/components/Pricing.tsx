import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section className="section-container section-spacing border-t border-border">
      <div className="max-w-lg">
        <p className="text-subtle text-sm mb-2">Testing phase</p>
        <h2 className="heading-section text-foreground mb-8">
          Early access pricing
        </h2>

        <div className="card-surface p-6 md:p-8">
          <div className="mb-6">
            <span className="text-3xl font-semibold text-foreground">~$25</span>
            <span className="text-subtle ml-2">/week per TikTok account</span>
          </div>

          <ul className="space-y-3 mb-6">
            {[
              "Flat pricing, no long contracts",
              "Pricing may change after beta",
              "Cancel anytime",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span className="text-body text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t border-border">
            <p className="text-subtle text-sm">
              We're validating demand before building the full system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
