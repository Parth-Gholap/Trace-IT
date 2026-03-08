import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Search, MapPin, Users, Shield, FileText, Camera, Package, Zap, Globe, Lock } from "lucide-react";

interface FeatureIcon {
  icon: React.ReactNode;
  label: string;
  position: { x: string; y: string };
}

interface TraceITHeroProps {
  logo?: string;
  navigation?: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
  }>;
  contactButton?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  title: string;
  highlightedText?: string;
  subtitle: string;
  primaryCTA?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryCTA?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  featureIcons?: FeatureIcon[];
  trustedByText?: string;
  brands?: Array<{
    name: string;
    logo: React.ReactNode;
  }>;
  className?: string;
  children?: React.ReactNode;
}

export function TraceITHero({
  logo = "TraceIT",
  navigation = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  contactButton = { label: "Contact Us", href: "#contact" },
  title = "Find What Matters Most",
  highlightedText = "Reunite with Your Belongings",
  subtitle = "Smart Lost & Found platform that helps communities track, report, and recover lost items efficiently.",
  primaryCTA = { label: "Report Lost Item", href: "#report" },
  secondaryCTA = { label: "Found an Item?", href: "#found" },
  featureIcons = [
    {
      icon: <Search className="w-8 h-8 text-cyan-400" />,
      label: "Smart Search",
      position: { x: "15%", y: "60%" },
    },
    {
      icon: <MapPin className="w-8 h-8 text-cyan-400" />,
      label: "Location Tracking",
      position: { x: "80%", y: "25%" },
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      label: "Community Network",
      position: { x: "50%", y: "70%" },
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      label: "Secure Matching",
      position: { x: "20%", y: "40%" },
    },
    {
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      label: "Easy Reporting",
      position: { x: "75%", y: "65%" },
    },
    {
      icon: <Camera className="w-8 h-8 text-cyan-400" />,
      label: "Photo Evidence",
      position: { x: "85%", y: "50%" },
    },
    {
      icon: <Package className="w-8 h-8 text-cyan-400" />,
      label: "Item Categories",
      position: { x: "25%", y: "80%" },
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      label: "Instant Alerts",
      position: { x: "65%", y: "35%" },
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      label: "Campus Wide",
      position: { x: "45%", y: "15%" },
    },
    {
      icon: <Lock className="w-8 h-8 text-cyan-400" />,
      label: "Privacy First",
      position: { x: "70%", y: "85%" },
    },
  ],
  trustedByText = "Trusted by leading educational institutions worldwide",
  brands = [
    { name: "State University", logo: "🎓" },
    { name: "Tech College", logo: "🔬" },
    { name: "City Campus", logo: "🏛️" },
  ],
  className = "",
  children,
}: TraceITHeroProps) {
  return (
    <section
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden bg-black",
        className
      )}
      aria-label="Hero section"
    >
      {/* Radial Glow Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute"
          style={{
            width: "1200px",
            height: "1200px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(0, 229, 255, 0.2) 0%, rgba(124, 77, 255, 0.1) 50%, rgba(0, 229, 255, 0) 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex flex-row justify-between items-center px-8 lg:px-16"
        style={{
          paddingTop: "24px",
          paddingBottom: "24px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            color: "#FFFFFF",
          }}
        >
          <span style={{ fontWeight: 400 }}>{logo.split(" ")[0]}</span>
          <span style={{ fontWeight: 700 }}>{logo.split(" ")[1] || ""}</span>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex flex-row items-center gap-8" aria-label="Main navigation">
          {navigation.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="hover:opacity-70 transition-opacity"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                color: "#FFFFFF",
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Contact Button */}
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={contactButton.onClick}
          className="hidden lg:block bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          {contactButton.label}
        </motion.button>
      </motion.header>

      {/* Main Content */}
      {children ? (
        <div className="relative z-10 flex-1 flex items-center justify-center w-full">
          {children}
        </div>
      ) : (
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
          {/* Floating Feature Icons */}
          {featureIcons.map((feature, index) => (
            <motion.div
              key={index}
              className="absolute flex flex-col items-center gap-2"
              style={{
                left: feature.position.x,
                top: feature.position.y,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -20, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.3 + index * 0.1 },
                scale: { duration: 0.6, delay: 0.3 + index * 0.1 },
                y: {
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "rgba(0, 229, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0, 229, 255, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 40px rgba(0, 229, 255, 0.4)",
                }}
              >
                {feature.icon}
              </div>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                }}
              >
                {feature.label}
              </span>
            </motion.div>
          ))}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center max-w-4xl"
            style={{ gap: "32px" }}
          >
            {/* Logo Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                background: "rgba(0, 0, 0, 0.8)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: "24px 32px",
              }}
            >
              <h1
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "#FFFFFF",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                {title}
              </h1>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "18px",
                  color: "rgba(255, 255, 255, 0.8)",
                  textAlign: "center",
                  marginTop: "16px",
                  lineHeight: 1.6,
                }}
              >
                {subtitle}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                onClick={primaryCTA.onClick}
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  boxShadow: "0 0 30px rgba(0, 229, 255, 0.5)",
                }}
              >
                {primaryCTA.label}
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                onClick={secondaryCTA.onClick}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all transform hover:scale-105"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                }}
              >
                {secondaryCTA.label}
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col items-center gap-8 mt-16"
            >
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.6)",
                  textAlign: "center",
                }}
              >
                {trustedByText}
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {brands.map((brand, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2"
                  >
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "24px",
                      }}
                    >
                      {brand.logo}
                    </span>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "12px",
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      {brand.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
