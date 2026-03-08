"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 backdrop-blur-sm bg-black/80 border-b border-gray-800/50 transition-all duration-300",
      isScrolled && "shadow-lg"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-white font-bold text-xl">TraceIT</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              How It Works
            </a>
            <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              Features
            </a>
            <a href="#community" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              Community
            </a>
            <a href="#faq" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              FAQ
            </a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 rounded-full transition-all duration-300",
              isOpen ? "bg-purple-600" : "bg-gray-700"
            )}
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-md border-b border-gray-800/50 transition-all duration-300",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="space-y-4">
            <a href="#how-it-works" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              How It Works
            </a>
            <a href="#features" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              Features
            </a>
            <a href="#community" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              Community
            </a>
            <a href="#faq" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              FAQ
            </a>
            <a href="#contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
