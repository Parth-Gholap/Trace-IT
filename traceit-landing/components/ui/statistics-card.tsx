"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatsBarProps {
  value: number;
  label: string;
  color: string;
  delay: number;
}

const StatsBar = ({ value, label, color, delay }: StatsBarProps) => {
  return (
    <div className="relative h-full flex-1">
      <div className="absolute bottom-0 left-0 w-full h-full bg-gray-800/30 rounded-lg overflow-hidden">

        <motion.div
          className={cn(
            "absolute bottom-0 left-0 w-full bg-gradient-to-t transition-all duration-1000",
            color
          )}
          style={{ height: `${value}%` }}
          initial={{ height: 0 }}
          animate={{ height: `${value}%` }}
          transition={{ duration: 0.5, delay, ease: "easeOut" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/60 rounded-full px-3 py-1 backdrop-blur-sm">
              <span className="text-white font-bold text-sm">{value}%</span>
            </div>
          </div>
        </motion.div>

      </div>

      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-gray-900 rounded-lg px-3 py-1 shadow-lg">
          <span className="text-gray-300 text-sm">{label}</span>
        </div>
      </div>
    </div>
  );
};

interface StatisticsCardProps {
  className?: string;
}

const StatisticsCard = ({ className }: StatisticsCardProps) => {
  const stats = [
    { value: 85, label: "Items Recovered", color: "from-cyan-400 to-cyan-600", delay: 0.2 },
    { value: 92, label: "Active Users", color: "from-purple-400 to-purple-600", delay: 0.4 },
    { value: 78, label: "Success Rate", color: "from-green-400 to-green-600", delay: 0.6 },
    { value: 95, label: "User Satisfaction", color: "from-blue-400 to-blue-600", delay: 0.8 },
  ];

  return (
    <section className={cn("py-20", className)}>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-64">
            {stats.map((stat, index) => (
              <StatsBar
                key={index}
                value={stat.value}
                label={stat.label}
                color={stat.color}
                delay={stat.delay}
              />
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default StatisticsCard;