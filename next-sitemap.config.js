require('dotenv').config();
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bd-news-next.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Fixes the "sitemap-0" issue
  changefreq: 'hourly',
  priority: 0.7,

  additionalPaths: async (config) => {
    const categories = ['Blog', 'Entertainment', 'Sports', 'Politics', 'Technology', 'Tranding'];
    let allUrls = [];

    for (const cat of categories) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/news?subCategory=${cat}&limit=1000&page=1`
        );
        const json = await res.json();

        // API থেকে news অ্যারে এক্সট্রাক্ট
        const posts = json?.news || [];

        if (posts.length > 0) {
          // সিঙ্গেল নিউজ লিঙ্ক
          const newsUrls = posts.map((post) => `/news/${post.slug}`);

          // সাব-ক্যাটাগরি লিঙ্ক (যদি থাকে)
          const subCategoryUrls = posts
            .filter((p) => p.subCategorySlug)
            .map((p) => `/${cat}/${p.subCategorySlug}`);

          allUrls.push(...newsUrls, ...subCategoryUrls);
        }
      } catch (err) {
        console.error(`Error fetching category ${cat}:`, err);
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
