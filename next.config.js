/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fixes the 308 Error in Google Search Console by preventing trailing slash conflicts
  trailingSlash: false, 

  images: {
    domains: ['images.pexels.com', 'i.ibb.co.com'],
  },

  async redirects() {
    return [
      // Redirect the misspelled "Tranding" to the correct "Trending"
      {
        source: '/Tranding',
        destination: '/Trending',
        permanent: true,
      },
      // Optional: Catch any sub-pages under the misspelled path
      {
        source: '/Tranding/:path*',
        destination: '/Trending/:path*',
        permanent: true,
      },
    ];
  },

  env: {
    // Correct production API URL
    NEXT_PUBLIC_API_URL: 'https://ecommerce-web-ago1.vercel.app', 
  },
};

module.exports = nextConfig;