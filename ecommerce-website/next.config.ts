import type { NextConfig } from "next";


// next.config.mjs
/** @type {import('next').NextApplication} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};
export default nextConfig;