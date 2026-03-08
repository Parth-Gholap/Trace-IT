"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Get Started?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join thousands of students who've already reunited with their belongings. 
            Start using TraceIT today and make your campus a better place.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-200 flex items-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>Report Lost Item</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-200 flex items-center space-x-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>Found Something?</span>
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 inline-flex items-center space-x-2 text-cyan-400"
          >
            <span className="text-white">Join the community</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
