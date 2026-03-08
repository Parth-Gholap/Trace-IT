import Hero from "../components/Hero";
import Features from "../components/Features";
import ProblemSection from "../components/ProblemSection";
import HowItWorks from "../components/HowItWorks";
import CommunityImpact from "../components/CommunityImpact";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import UseCases from "../components/UseCases";
import FinalCTA from "../components/FinalCTA";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <CommunityImpact />
      <Testimonials />
      <FAQ />
      <UseCases />
      <FinalCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
