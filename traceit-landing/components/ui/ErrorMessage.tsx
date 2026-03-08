import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AlertCircle, X } from "lucide-react";

interface ErrorMessageProps {
  title: string;
  message: string;
  type?: "error" | "warning" | "info";
  onRetry?: () => void;
  onDismiss?: () => void;
}

const ErrorMessage = ({ 
  title, 
  message, 
  type = "error", 
  onRetry, 
  onDismiss 
}: ErrorMessageProps) => {
  const typeStyles = {
    error: "bg-red-500/10 border-red-500 text-red-900",
    warning: "bg-yellow-500/10 border-yellow-500 text-yellow-900",
    info: "bg-blue-500/10 border-blue-500 text-blue-900"
  };

  const icons = {
    error: <AlertCircle className="w-5 h-5" />,
    warning: <AlertCircle className="w-5 h-5" />,
    info: <AlertCircle className="w-5 h-5" />
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={cn("fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4")}
    >
      <div className={cn("bg-white/95 rounded-lg p-6 max-w-md mx-auto shadow-xl", typeStyles[type])}>
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            {icons[type]}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{message}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 mt-4">
          {onRetry && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onRetry}
              className={cn("bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md transition-colors duration-200")}
            >
              Try Again
            </motion.button>
          )}
          
          {onDismiss && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onDismiss}
              className="ml-3 text-gray-500 hover:text-gray-400 transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ErrorMessage;
