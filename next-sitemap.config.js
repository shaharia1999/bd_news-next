require('dotenv').config();

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bd-news-next.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false, 
  changefreq: 'hourly',
  priority: 0.7,

  additionalPaths: async (config) => {
    // Fixed "Tranding" to "Trending"
    const categories = ['Blog', 'Entertainment', 'Sports', 'Politics', 'Technology', 'Trending'];
    let allUrls = [];

    // Use the production API URL; fallback to avoid ECONNREFUSED if env is missing
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://ecommerce-web-ago1.vercel.app';

    for (const cat of categories) {
      try {
        const res = await fetch(
          `${baseUrl}/news?subCategory=${cat}&limit=1000&page=1`
        );
        
        if (!res.ok) {
          console.warn(`Failed to fetch category ${cat}: ${res.statusText}`);
          continue;
        }

        const json = await res.json();
        const posts = json?.news || [];

        if (posts.length > 0) {
          const newsUrls = posts.map((post) => `/news/${post.slug}`);
          const subCategoryUrls = posts
            .filter((p) => p.subCategorySlug)
            .map((p) => `/${cat}/${p.subCategorySlug}`);

          allUrls.push(...newsUrls, ...subCategoryUrls);
        }
      } catch (err) {
        console.error(`Error fetching category ${cat}:`, err.message);
      }
    }

    return allUrls;
  },

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path.startsWith('/news/') ? 'hourly' : 'daily',
      priority: path.startsWith('/news/') ? 0.9 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};