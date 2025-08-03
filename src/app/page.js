import BreakingNews from "./component/BreakingNews";
import HomeNews from "./component/HomeNews";
import Sports from "./component/Sports";
import Magazine from "./component/Magazine";
import Education from "./component/Education";
import Blog from "./component/Blog";
import { serverFetchData } from "./lib/serverFetch";


export async function generateMetadata() {
  const news = await serverFetchData(
    'news?category=Tranding&sortBy=createdAt&sortOrder=desc&limit=1&page=1',
    'no-store'
  );
  const latest = news?.[0];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';
  const title = latest?.title || 'Latest News Headlines | Your Site Name';
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
      url: siteUrl,
      type: 'website',
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default function Home() {
  return (
    <div className="w-full">
      <BreakingNews />
      <HomeNews />
      <Sports />
      <Magazine />
      <Education />
      <Blog />
    </div>
  );
}
