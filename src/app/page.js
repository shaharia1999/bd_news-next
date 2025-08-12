import BreakingNews from "./component/BreakingNews";
import HomeNews from "./component/HomeNews";
import Sports from "./component/Sports";
import Magazine from "./component/Magazine";
import Education from "./component/Education";
import Blog from "./component/Blog";
import { serverFetchData } from "./lib/serverFetch";
// import { Suspense } from "react";
// import BreakingNewsSkeleton from "./component/BreakingNewsSkeleton"; // Make sure this file exists






export default function Home() {
  return (
    <div className="w-full pb-10">
      <BreakingNews />
      <HomeNews />
      <Sports />
      <Magazine />
      <Education />
      <Blog />
    </div>
  );
}
// export async function generateMetadata() {
//   const data = await serverFetchData(
//     'news?category=Tranding&sortBy=createdAt&sortOrder=desc&limit=1&page=1',
//     {
//       cache: 'default',
//       next: { revalidate: 300 },
//     }
//   );

//   const latest = data?.news?.[0]; // ✅ fixed here
//   const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.newsus.shop';
//   const title = latest?.title || 'Latest News Headlines | NewsUS';
//   const description =
//     latest?.description?.replace(/<[^>]*>/g, '')?.slice(0, 150) ||
//     'Get the latest breaking news and updates on current events from around the world.';
//   const image = latest?.mainImage?.startsWith('http')
//     ? latest.mainImage
//     : `${siteUrl}${latest?.mainImage || '/default-og.jpg'}`;

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       url: siteUrl,
//       type: 'website',
//       images: [{ url: image }],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title,
//       description,
//       images: [image],
//     },
//     alternates: {
//       canonical: siteUrl,
//     },
//   };
// }
// This example is for a dynamic page, like app/news/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const pageSlug = params?.slug;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.newsus.shop';

  // Define categories for fallback metadata
  const categories = ['Breaking News', 'Sports', 'Magazine', 'Education', 'Blog'];
  const categoryList = categories.join(', ');

  // Fetch latest trending news
  const data = await serverFetchData(
    'news?category=Tranding&sortBy=createdAt&sortOrder=desc&limit=1&page=1',
    {
      cache: 'default',
      next: { revalidate: 300 },
    }
  );

  const latest = data?.news?.[0];

  // Dynamically set the canonical URL
  const canonicalUrl = pageSlug ? `${siteUrl}/news/${pageSlug}` : siteUrl;

  // Use latest news data if available, else fallback to categories metadata
  const title =
    latest?.title || `Latest News and Updates on ${categoryList} | NewsUS`;
  const description =
    latest?.description?.replace(/<[^>]*>/g, '')?.slice(0, 150) ||
    `Stay informed with breaking news, sports updates, magazines, education insights, and blog articles. Latest headlines from around the world.`;
  const image = latest?.mainImage?.startsWith('http')
    ? latest.mainImage
    : `${siteUrl}${latest?.mainImage || '/default-og.jpg'}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

