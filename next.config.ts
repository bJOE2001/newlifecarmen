import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  devIndicators: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/sol',
        destination: 'https://newlifesol.vercel.app',
      },
      {
        source: '/sol/:path*',
        destination: 'https://newlifesol.vercel.app/:path*',
      },
      {
        source: '/assets/:path*',
        destination: 'https://newlifesol.vercel.app/assets/:path*',
      },
      {
        source: '/images/:path*',
        destination: 'https://newlifesol.vercel.app/images/:path*',
      },
      {
        source: '/icons.svg',
        destination: 'https://newlifesol.vercel.app/icons.svg',
      },
      {
        source: '/sol/favicon.svg',
        destination: 'https://newlifesol.vercel.app/favicon.svg',
      },
    ]
  },
}

export default nextConfig
