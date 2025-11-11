/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true }, // keep this for lighter builds
  // DO NOT set output: 'export' (you’re doing SSR)
};
module.exports = nextConfig;






