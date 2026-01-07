import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoint from "@/components/PainPoint";
import HowItWorks from "@/components/HowItWorks";
import DashboardPreview from "@/components/DashboardPreview";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PainPoint />
        <HowItWorks />
        <DashboardPreview />
        <div id="pricing">
          <Pricing />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
