// /** @type {import('next').NextConfig} */
const nextConfig = {
  // Fixes the 308 Error by ensuring Google doesn't hit trailing slash redirects
  trailingSlash: false, 

  images: {
    domains: ['images.pexels.com', 'i.ibb.co.com'], 
  },

  async redirects() {
    return [
      // 1. Domain Redirect (Existing)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'newsus.shop',
          },
        ],
        destination: 'https://bd-news-next.vercel.app/:path*',
        permanent: true,
      },
      // 2. Fix the "Tranding" Typo (New)
      {
        source: '/Tranding',
        destination: '/Trending',
        permanent: true,
      },
    ];
  },

  env: {
    NEXT_PUBLIC_API_URL: 'https://ecommerce-web-ago1.vercel.app',
  },
};

module.exports = nextConfig;