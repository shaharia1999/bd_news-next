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
//   const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://newsus.shop';
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
  // If you're on a dynamic route, get the slug or ID from params.
  const pageSlug = params.slug; 

  const data = await serverFetchData(
    'news?category=Tranding&sortBy=createdAt&sortOrder=desc&limit=1&page=1',
    {
      cache: 'default',
      next: { revalidate: 300 },
    }
  );

  const latest = data?.news?.[0];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://newsus.shop';
  
  // Dynamically set the canonical URL based on the current page.
  // For the homepage, it's just the siteUrl. For other pages, add the path.
  const canonicalUrl = pageSlug ? `${siteUrl}/news/${pageSlug}` : siteUrl;

  const title = latest?.title || 'Latest News Headlines | NewsUS';
  const description =
    latest?.description?.replace(/<[^>]*>/g, '')?.slice(0, 150) ||
    'Get the latest breaking news and updates on current events from around the world.';
  const image = latest?.mainImage?.startsWith('http')
    ? latest.mainImage
    : `${siteUrl}${latest?.mainImage || '/default-og.jpg'}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonicalUrl, // Use the dynamic URL here
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
      canonical: canonicalUrl, // Use the dynamic URL here
    },
  };
}
