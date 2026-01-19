import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "http://localhost:3000",
    "https://murilofernandes.dev",
    "http://192.168.3.108:3000",
    "192.168.3.108/",
  ],
  images: {
    remotePatterns: [
      { hostname: "cdn.jsdelivr.net" },
      { hostname: "cdn.simpleicons.org" },
      { hostname: "raw.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
