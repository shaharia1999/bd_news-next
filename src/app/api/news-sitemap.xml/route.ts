import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news?limit=1000`);
    const json = await res.json();

    console.log('Raw API response:', json); // ✅ Check the full response

    // Ensure posts is always an array
    let postsRaw = json.news || [];
    const posts = Array.isArray(postsRaw) ? postsRaw : [postsRaw];

    console.log('Processed posts array:', posts); // ✅ Check posts array

    // Only recent news (last 48 hours) with required fields
    const recentPosts = posts.filter(post => {
      if (!post.slug || !post.title || !post.createdAt) return false;

      const published = new Date(post.createdAt).getTime(); // use createdAt
      const now = Date.now();
      const hoursDiff = (now - published) / (1000 * 60 * 60);

      console.log(post.slug, 'hoursDiff:', hoursDiff); // debug
      return hoursDiff <= 48;
    });

    console.log('Recent posts (last 48h):', recentPosts); // ✅ Check filtered posts

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
      <news:publication_date>${new Date(post.createdAt).toISOString()}</news:publication_date>
      <news:title>${post.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</news:title>
    </news:news>
  </url>
`).join('')}
</urlset>`;

    return new NextResponse(xml, {
      headers: { 'Content-Type': 'application/xml' },
    });

  } catch (error) {
    console.error('Error generating news sitemap:', error);
    return new NextResponse('Error generating news sitemap', { status: 500 });
  }
}
