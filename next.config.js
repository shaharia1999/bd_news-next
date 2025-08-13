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
};

module.exports = nextConfig;
