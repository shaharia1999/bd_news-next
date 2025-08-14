import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news?limit=1000`);
  const json = await res.json();
  const posts = json.news || [];

  // Only recent news (last 48 hours)
  const recentPosts = posts.filter(post => {
    const published = new Date(post.publishedAt);
    const now = new Date();
    return (now.getTime() - published.getTime()) / (1000 * 60 * 60) <= 48;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${recentPosts.map(post => `
    <url>
      <loc>https://www.newsus.shop/news/${post.slug}</loc>
      <news:news>
        <news:publication>
          <news:name>NewsUs</news:name>
          <news:language>en</news:language>
        </news:publication>
        <news:publication_date>${new Date(post.publishedAt).toISOString()}</news:publication_date>
        <news:title>${post.title}</news:title>
      </news:news>
    </url>
  `).join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
