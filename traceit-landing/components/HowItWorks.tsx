"use client";

import { motion } from "framer-motion";
import { Search, Upload, Users, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Report Lost Item",
    description: "Post details about your lost item with photos, location, and identifying features.",
    icon: <Search className="w-8 h-8 text-cyan-400" />,
    delay: 0.1
  },
  {
    title: "Community Search",
    description: "Our community actively searches for reported items and notifies you of potential matches.",
    icon: <Users className="w-8 h-8 text-cyan-400" />,
    delay: 0.2
  },
  {
    title: "Get Notified",
    description: "Receive instant alerts when someone posts about your lost item or finds something you've reported.",
    icon: <CheckCircle className="w-8 h-8 text-cyan-400" />,
    delay: 0.3
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Getting started with TraceIT is simple. Follow these three steps to reconnect with your belongings or help others in your community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: step.delay }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white text-center mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-300 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
