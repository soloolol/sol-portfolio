import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true, // next/image 최적화 비활성화
  },
};

if (process.env.NEXT_PUBLIC_NODE_ENV === 'prod') {
  nextConfig.compiler = {
    removeConsole: {
      exclude: ['error', 'warn'],
    },
  };
}
export default nextConfig;
