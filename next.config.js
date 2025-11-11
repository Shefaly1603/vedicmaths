/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },       // keeps build lighter
  productionBrowserSourceMaps: false   // optional; keeps build lighter
};
module.exports = nextConfig;







