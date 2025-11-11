/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/webp"],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Optimize CSS and JS
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Enable SWC minification
  swcMinify: true,
};

export default nextConfig;
