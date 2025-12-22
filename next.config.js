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
            value: 'bd-news-next.vercel.app', // non-www domain
          },
        ],
        destination: 'https://bd-news-next.vercel.app/:path*', // redirect to www
        permanent: true, // 301 redirect
      },
    ];
    
  },
   env: {
    NEXT_PUBLIC_API_URL: 'https://ecommerce-web-ago1.vercel.app', // backend API
  },
};

module.exports = nextConfig;
