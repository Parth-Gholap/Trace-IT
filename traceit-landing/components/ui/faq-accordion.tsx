"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  delay: number;
}

const FAQItem = ({ question, answer, isOpen, onToggle, delay }: FAQItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/30 transition-colors"
      >
        <div className="flex items-center space-x-3">
          <HelpCircle className="w-5 h-5 text-cyan-400" />
          <h3 className="text-white font-semibold">{question}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-400"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4">
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-purple-400 mt-1" />
                <p className="text-gray-300 leading-relaxed">{answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface FAQAccordionProps {
  className?: string;
}

const FAQAccordion = ({ className }: FAQAccordionProps) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How does TraceIT work?",
      answer: "TraceIT is a community-powered platform where users can report lost items, search for found items, and connect with others to reunite owners with their belongings. Simply post details about your lost or found item, and our community will help connect you.",
      delay: 0.1
    },
    {
      question: "Is TraceIT free to use?",
      answer: "Yes, TraceIT is completely free for all users. We believe in helping communities reconnect with their belongings without any cost barriers.",
      delay: 0.2
    },
    {
      question: "How do I report a lost item?",
      answer: "Click 'Report Lost Item' and provide details about what you lost, when and where you lost it, and any identifying features. The more detail you provide, the better our community can help.",
      delay: 0.3
    },
    {
      question: "What should I do if I find something?",
      answer: "Great question! Click 'Found Something?' and describe the item, where you found it, and when. We'll help you connect with the owner through our secure messaging system.",
      delay: 0.4
    },
    {
      question: "How do you ensure privacy and security?",
      answer: "We use secure messaging for all communications and never share personal contact information without permission. All users are verified through their institutional email addresses.",
      delay: 0.5
    }
  ];

  return (
    <section className={cn("py-20", className)}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Get answers to common questions about how TraceIT works and how you can get started.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
              delay={faq.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
