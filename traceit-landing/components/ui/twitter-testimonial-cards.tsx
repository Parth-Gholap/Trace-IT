"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Heart, MessageCircle, Repeat2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  username: string;
  content: string;
  avatar: string;
  likes: number;
  retweets: number;
  replies: number;
  verified: boolean;
  delay: number;
}

const TestimonialCard = ({ 
  name, 
  username, 
  content, 
  avatar, 
  likes, 
  retweets, 
  replies, 
  verified,
  delay 
}: TestimonialCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer",
        isHovered && "shadow-2xl shadow-cyan-500/20"
      )}
    >
      <div className="flex items-start space-x-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold">
          {avatar}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h4 className="text-white font-semibold">{name}</h4>
            {verified && (
              <div className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center">
                <Twitter className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          <p className="text-gray-400 text-sm">@{username}</p>
        </div>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed">{content}</p>

      <div className="flex items-center space-x-6 text-gray-400">
        <div className="flex items-center space-x-1 hover:text-cyan-400 transition-colors cursor-pointer">
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm">{replies}</span>
        </div>
        <div className="flex items-center space-x-1 hover:text-cyan-400 transition-colors cursor-pointer">
          <Repeat2 className="w-4 h-4" />
          <span className="text-sm">{retweets}</span>
        </div>
        <div className="flex items-center space-x-1 hover:text-cyan-400 transition-colors cursor-pointer">
          <Heart className="w-4 h-4" />
          <span className="text-sm">{likes}</span>
        </div>
      </div>
    </motion.div>
  );
};

interface TwitterTestimonialCardsProps {
  className?: string;
}

const TwitterTestimonialCards = ({ className }: TwitterTestimonialCardsProps) => {
  const testimonials = [
    {
      name: "Sarah Chen",
      username: "sarah_lost_phone",
      content: "Lost my phone at the library and found it within 2 hours thanks to TraceIT! The community here is amazing.",
      avatar: "SC",
      likes: 45,
      retweets: 12,
      replies: 8,
      verified: true,
      delay: 0.1
    },
    {
      name: "Mike Johnson",
      username: "mike_found_wallet",
      content: "Found someone's wallet and was able to return it quickly. The app made it so easy to connect!",
      avatar: "MJ",
      likes: 67,
      retweets: 23,
      replies: 15,
      verified: false,
      delay: 0.2
    },
    {
      name: "Emily Davis",
      username: "emily_recovered_keys",
      content: "My keys were missing for 3 days. Posted on TraceIT and got them back the same day. Lifesaver!",
      avatar: "ED",
      likes: 89,
      retweets: 34,
      replies: 21,
      verified: true,
      delay: 0.3
    }
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
              Community Stories
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Real stories from real people who've reunited with their belongings through TraceIT.
          </p>
        </motion.div>

        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TwitterTestimonialCards;
