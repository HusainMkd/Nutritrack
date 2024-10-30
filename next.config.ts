import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
  api: {
    bodyParser: {
      sizeLimit: '5mb', // Increase if needed
    },
  },
};

export default nextConfig;
