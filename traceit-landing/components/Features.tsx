import FeatureCard from "../components/ui/feature-card";
import { Package, Search, Users, Shield, Zap, Globe, Lock } from "lucide-react";

const features = [
  {
    title: "Easy Reporting",
    description: "Report lost or found items with detailed descriptions and photos in seconds.",
    icon: <Package className="w-8 h-8 text-white" />,
    delay: 0.1
  },
  {
    title: "Smart Search",
    description: "Advanced search filters help you quickly find what you're looking for.",
    icon: <Search className="w-8 h-8 text-white" />,
    delay: 0.2
  },
  {
    title: "Community Powered",
    description: "Leverage the power of your community to find lost items faster.",
    icon: <Users className="w-8 h-8 text-white" />,
    delay: 0.3
  },
  {
    title: "Secure Platform",
    description: "Your data and privacy are protected with enterprise-grade security.",
    icon: <Shield className="w-8 h-8 text-white" />,
    delay: 0.4
  },
  {
    title: "Real-time Notifications",
    description: "Get instant alerts when items matching your description are found.",
    icon: <Zap className="w-8 h-8 text-white" />,
    delay: 0.5
  },
  {
    title: "Campus Wide",
    description: "Available across all campus locations and facilities.",
    icon: <Globe className="w-8 h-8 text-white" />,
    delay: 0.6
  },
  {
    title: "Privacy First",
    description: "Your information is kept private and secure with our privacy-first approach.",
    icon: <Lock className="w-8 h-8 text-white" />,
    delay: 0.7
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Everything you need to manage lost and found items efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
