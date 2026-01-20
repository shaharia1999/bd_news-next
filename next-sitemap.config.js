/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bd-news-next.vercel.app', // Make sure this matches GSC exactly
  generateRobotsTxt: true,
  generateIndexSitemap: false, // This helps by keeping it to one file
};