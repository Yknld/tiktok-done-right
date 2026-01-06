import { UserPlus, Flame, Calendar, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "You sign up",
    description: "Tell us what you're promoting.",
  },
  {
    icon: Flame,
    title: "We warm the account",
    description: "Natural usage before posting begins.",
  },
  {
    icon: Calendar,
    title: "We post daily",
    description: "1–3 TikToks per day, scaling over time.",
  },
  {
    icon: BarChart3,
    title: "You track progress",
    description: "Simple weekly summaries.",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-container section-spacing">
      <h2 className="heading-section text-foreground mb-12">
        How it works
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="group">
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
              <step.icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
            </div>
            
            <h3 className="font-medium text-foreground mb-2">
              {step.title}
            </h3>
            
            <p className="text-subtle text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-subtle mt-12 text-sm">
        Posting is handled manually — not bots.
      </p>
    </section>
  );
};

export default HowItWorks;
