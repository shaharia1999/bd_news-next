/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com','i.ibb.co.com'], // add the domain here
  },
  // experimental: {
  //     dynamicID: true, // Always fresh
  // }
};

module.exports = nextConfig;
