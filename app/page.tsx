import Hero from "../traceit-landing/components/Hero";
import Navbar from "../traceit-landing/components/Navbar";
import Features from "../traceit-landing/components/Features";
import ProblemSection from "../traceit-landing/components/ProblemSection";
import HowItWorks from "../traceit-landing/components/HowItWorks";
import Pricing from "../traceit-landing/components/Pricing";
import CommunityImpact from "../traceit-landing/components/CommunityImpact";
import Testimonials from "../traceit-landing/components/Testimonials";
import FAQ from "../traceit-landing/components/FAQ";
import UseCases from "../traceit-landing/components/UseCases";
import FinalCTA from "../traceit-landing/components/FinalCTA";
import ContactSection from "../traceit-landing/components/ContactSection";
import Footer from "../traceit-landing/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <Pricing />
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
