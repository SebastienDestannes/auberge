import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Autorise l'accès depuis IP locale
  allowedDevOrigins: ['192.168.1.12', 'localhost', '127.0.0.1'],
};

export default nextConfig;