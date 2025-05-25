/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Required for Framer Motion with Next.js 13+
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `framer-motion`
    if (!isServer) {
      config.resolve.alias['framer-motion'] = 'framer-motion';
    }
    return config;
  },
  // Enable ESM support
  experimental: {
    esmExternals: 'loose',
  },
};

module.exports = nextConfig;
