import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '', // FIX: Explicitly set port to empty string for default HTTPS
        pathname: '/photos/**',
      },
    ],
  },
}