/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // reduces memory use during build (important for Cloudflare)
  },
};

module.exports = nextConfig;

