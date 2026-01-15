import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "http://localhost:3000",
    "https://murilofernandes.dev",
    "http://192.168.3.108:3000",
  ],
};

export default nextConfig;
