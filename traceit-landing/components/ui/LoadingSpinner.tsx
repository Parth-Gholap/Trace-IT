import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LoadingSpinner = ({ size = "md", className }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <motion.div
        className={cn(
          "border-4 border-gray-800 rounded-full",
          sizeClasses[size]
        )}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <div className="border-2 border-transparent border-t-cyan-400 rounded-full w-full h-full flex items-center justify-center">
          <div className="w-3 h-3 border-2 border-transparent border-t-cyan-400 rounded-full animate-ping" />
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
