import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fix Turbopack root directory detection
  turbopack: {
    root: __dirname,
  },
  // Updated serverExternalPackages configuration
  serverExternalPackages: [],
};

export default nextConfig;
