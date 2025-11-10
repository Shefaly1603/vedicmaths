/** @type {import('next').NextConfig} */
const nextConfig = {
  // SSR build for Cloudflare Pages + OpenNext
  images: { unoptimized: true },              // reduces build work/memory
  productionBrowserSourceMaps: false,         // smaller builds
  eslint:   { ignoreDuringBuilds: true },     // optional: faster CI builds
  typescript: { ignoreBuildErrors: true }     // optional: faster CI builds
  // DO NOT set: output: "export"
};

module.exports = nextConfig;


