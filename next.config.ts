import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows next/image to load from any HTTPS source.
    // When you host project screenshots, no further config is needed.
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
