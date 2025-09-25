import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Allow deployment even if TypeScript has errors */
  typescript: {
    ignoreBuildErrors: true,
  },
  /* Ignore ESLint warnings during build */
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

