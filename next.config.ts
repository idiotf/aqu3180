import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  allowedDevOrigins: process.env.ALLOWED_DEV_ORIGINS?.split(';'),
  images: {
    remotePatterns: [
      new URL('https://**.googleusercontent.com/**'),
      new URL('https://raw.githubusercontent.com/idiotf/*/main/*/**'),
    ],
  },
  async redirects() {
    return [
      {
        source: '/image-encoder',
        destination: 'https://image.aqu3180.co.kr/rgb-encoder/encoder',
        permanent: false,
      },
      {
        source: '/image-encoder/:name(encoder|decoder).html',
        destination: 'https://image.aqu3180.co.kr/rgb-encoder/:name',
        permanent: false,
      }
    ]
  },
}

export default nextConfig
