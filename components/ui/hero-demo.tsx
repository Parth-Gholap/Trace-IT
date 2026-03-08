import { TraceITHero } from "@/components/ui/traceit-hero";
import { Search, MapPin, Users, Shield, FileText, Camera } from "lucide-react";

export default function TraceITHeroDemo() {
  return (
    <TraceITHero
      logo="TraceIT"
      navigation={[
        { label: "Home", href: "#home" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Features", href: "#features" },
        { label: "Community", href: "#community" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ]}
      contactButton={{
        label: "Contact",
        href: "#contact",
      }}
      title="Lost Something?"
      highlightedText="Trace It."
      subtitle="A community-powered platform helping people report and recover lost items quickly through collaboration and smart matching."
      primaryCTA={{
        label: "Report Lost Item",
        href: "#report-lost",
      }}
      secondaryCTA={{
        label: "Found an Item",
        href: "#report-found",
      }}
      featureIcons={[
        {
          icon: <FileText className="w-8 h-8 text-cyan-400" />,
          label: "Report",
          position: { x: "10%", y: "20%" },
        },
        {
          icon: <Camera className="w-8 h-8 text-cyan-400" />,
          label: "Photo",
          position: { x: "15%", y: "60%" },
        },
        {
          icon: <Search className="w-8 h-8 text-cyan-400" />,
          label: "Search",
          position: { x: "80%", y: "25%" },
        },
        {
          icon: <Users className="w-8 h-8 text-cyan-400" />,
          label: "Community",
          position: { x: "75%", y: "65%" },
        },
      ]}
      trustedByText="Trusted by communities"
      brands={[
        {
          name: "State University",
          logo: (
            <div className="text-white text-sm font-semibold opacity-50">
              State University
            </div>
          ),
        },
        {
          name: "Tech Campus",
          logo: (
            <div className="text-white text-sm font-semibold opacity-50">
              Tech Campus
            </div>
          ),
        },
        {
          name: "City College",
          logo: (
            <div className="text-white text-sm font-semibold opacity-50">
              City College
            </div>
          ),
        },
        {
          name: "Business Hub",
          logo: (
            <div className="text-white text-sm font-semibold opacity-50">
              Business Hub
            </div>
          ),
        },
        {
          name: "Event Center",
          logo: (
            <div className="text-white text-sm font-semibold opacity-50">
              Event Center
            </div>
          ),
        },
        {
          name: "State University",
          logo: (
            <div className="text-white text-sm font-semibold opacity-50">
              State University
            </div>
          ),
        },
      ]}
    />
  );
}
