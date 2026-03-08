"use client";

import StatisticsCard from "../components/ui/statistics-card";
import { motion } from "framer-motion";

export default function CommunityImpact() {
  return (
    <section id="community" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Community Impact
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            See how TraceIT is making a difference in communities worldwide with real-time statistics and success metrics.
          </p>
        </motion.div>

        <StatisticsCard />
      </div>
    </section>
  );
}
