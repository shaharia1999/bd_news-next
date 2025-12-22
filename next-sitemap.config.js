/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bd-news-next.vercel.app', // No trailing slash at the end
  generateRobotsTxt: true, // Also generates robots.txt
  sitemapSize: 5000, // Optional, split if many URLs
};