/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'i.ibb.co.com'], // existing domains
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'newsus.shop', // non-www domain
          },
        ],
        destination: 'https://www.newsus.shop/:path*', // redirect to www
        permanent: true, // 301 redirect
      },
    ];
    
  },
   env: {
    NEXT_PUBLIC_API_URL: 'https://ecommerce-web-ago1.vercel.app', // backend API
  },
};

module.exports = nextConfig;
