import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  srcDir: 'src',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
    ],
  },
}

export default nextConfig
