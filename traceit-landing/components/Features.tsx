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
    title: "Secure Messaging",
    description: "Connect safely with other users through our encrypted messaging system.",
    icon: <Shield className="w-8 h-8 text-white" />,
    delay: 0.4
  },
  {
    title: "Real-time Updates",
    description: "Get instant notifications when someone posts about your lost item.",
    icon: <Zap className="w-8 h-8 text-white" />,
    delay: 0.5
  },
  {
    title: "Campus Wide",
    description: "Available across all campus locations and facilities.",
    icon: <Globe className="w-8 h-8 text-white" />,
    delay: 0.6
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Everything you need to manage lost and found items efficiently and securely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
