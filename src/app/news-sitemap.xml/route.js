

const SITE_URL = 'https://www.newsus.shop';
const PUBLICATION_NAME = 'Shaharia'; // Replace with your publication's name
const PUBLICATION_LANGUAGE = 'en'; // Use the appropriate ISO language code, e.g., 'bn' for Bengali

function generateNewsSitemapXml(posts) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">`;

  // Filter posts to include only those published in the last 48 hours
  const twoDaysAgo = new Date(Date.now() - 48 * 60 * 60 * 1000);
  const recentPosts = posts.filter(post => new Date(post.publishedAt) >= twoDaysAgo);

  recentPosts.forEach(post => {
    xml += `
      <url>
        <loc>${SITE_URL}/news/${post.slug}</loc>
        <news:news>
          <news:publication>
            <news:name>${PUBLICATION_NAME}</news:name>
            <news:language>${PUBLICATION_LANGUAGE}</news:language>
          </news:publication>
          <news:publication_date>${post.publishedAt}</news:publication_date>
          <news:title>${post.title}</news:title>
        </news:news>
      </url>`;
  });

  xml += `</urlset>`;

  return xml;
}

// For Next.js App Router (using the `app` directory)
export const GET = async () => {
  try {
    const apiRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/news?limit=1000`
    );
    const data = await apiRes.json();
    const posts = data?.news || [];

    const xml = generateNewsSitemapXml(posts);

    return new Response(xml, {
      headers: {
        'Content-Type': 'text/xml',
      },
    });
  } catch (err) {
    console.error('Error generating news sitemap:', err);
    return new Response('Error generating news sitemap', { status: 500 });
  }
};
