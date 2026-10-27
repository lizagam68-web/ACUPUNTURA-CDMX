import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.VITE_GOOGLE_MAPS_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  },
  devIndicators: false,
  poweredByHeader: false,
  compress: false,
  allowedDevOrigins: [
    '*.run.app',
    '*.google.com',
    'ais-dev-vr7ypgcxviqhnokkrbolo4-1875838885.us-east1.run.app',
    'ais-pre-vr7ypgcxviqhnokkrbolo4-1875838885.us-east1.run.app',
    'localhost:3000',
    'localhost:8080',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.acupunturacdmx.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'acupunturacdmx.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'acupunturacdmx.com',
          },
        ],
        destination: 'https://www.acupunturacdmx.com/:path*',
        permanent: true,
      },
      // English pages to Spanish
      {
        source: '/contact',
        destination: '/contacto',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      {
        source: '/nosotros',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pain',
        destination: '/dolor',
        permanent: true,
      },
      {
        source: '/fertility',
        destination: '/fertilidad',
        permanent: true,
      },
      {
        source: '/facial-paralysis',
        destination: '/paralisis-facial',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
