import { NextResponse } from 'next/server';

// Force Next.js to fetch fresh data on every request
export const dynamic = 'force-dynamic'; 
export const revalidate = 0;

export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news?limit=1000`, {
      next: { revalidate: 0 } // Ensure fetch isn't cached
    });
    const json = await res.json();

    let postsRaw = json.news || [];
    const posts = Array.isArray(postsRaw) ? postsRaw : [postsRaw];

    const recentPosts = posts.filter(post => {
      if (!post.slug || !post.title || !post.createdAt) return false;
      const published = new Date(post.createdAt).getTime();
      const hoursDiff = (Date.now() - published) / (1000 * 60 * 60);
      return hoursDiff <= 48;
    });

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${recentPosts.map(post => {
  // Clean title for XML safety
  const safeTitle = post.title.replace(/[<>&"']/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '"': return '&quot;';
      case "'": return '&apos;';
      default: return c;
    }
  });

  return `
  <url>
    <loc>https://www.newsus.shop/news/${post.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>NewsUs</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${new Date(post.createdAt).toISOString()}</news:publication_date>
      <news:title>${safeTitle}</news:title>
    </news:news>
  </url>`;
}).join('')}
</urlset>`;

    return new NextResponse(xml, {
      headers: { 
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=600' // Optional: Cache for 30 mins
      },
    });

  } catch (error) {
    console.error('Sitemap Error:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}