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
export async function generateMetadata() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bd-news-next.vercel.app";

  const title = "NewsUS: Top Breaking News & Trending Stories Today";
  const description =
    "Stay updated with breaking news, trending stories, sports, technology, entertainment, and more. Fresh news daily on NewsUS.";
  const image = `${siteUrl}/default-og.jpg`; // Default OG image for homepage

  return {
    title,
    description,
    keywords: [
      "breaking news",
      "latest news today",
      "trending news",
      "world news",
      "sports news",
      "technology news",
      "entertainment news",
    ],
    alternates: {
      canonical: siteUrl, // ✅ Added canonical URL
    },
    openGraph: {
      title,
      description,
      url: siteUrl,
      type: "website",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}


