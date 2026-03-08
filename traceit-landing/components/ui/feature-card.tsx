"use client";

import { motion } from "framer-motion";
import { Package, Search, Users, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, scale: 1.02, boxShadow: "0 20px 40px rgba(0, 229, 255, 0.3)" }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300"
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 mx-auto">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-white text-center mb-3">
        {title}
      </h3>
      
      <p className="text-gray-300 text-center leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
