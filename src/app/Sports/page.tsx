import { serverFetchData } from "../lib/serverFetch";
import { subCategoriesMap } from "../lib/subCategories";
import SportsSection from "./components/SportsSection";
// import PoliticsSection from "./components/SportsSection";

interface NewsItem {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage: string;
  createdAt: string;
}

const SportsPage = async () => {
  const subCategories = subCategoriesMap['Sports'];
  const data: { [key: string]: NewsItem[] } = {};

  for (const sub of subCategories) {
    const res = await serverFetchData<{ news: NewsItem[] }>(
      `news?subCategory=${sub}&limit=8&page=1`,
          {
    cache: 'default',
    next: { revalidate: 60 }
  }
    );
    // console.log(res);
    data[sub] = res?.news ?? [];
  }

  return (
    <div className=" px-3 md:py-10  py-5 lg:px-7 ">
      {Object.entries(data)
        .filter(([_, items]) => items.length > 0) // ✅ Only show sections with data
        .map(([subCategory, items]) => (
          <SportsSection
            key={subCategory}
            subCategory={subCategory}
            title={subCategory}
            items={items}
          />
        ))}
    </div>
  );
};

export default SportsPage;
export async function generateMetadata() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bd-news-next.vercel.app';
  const subCategories = subCategoriesMap['Sports'] || [];
  const categoriesList = subCategories.join(', ');

  const title = `Latest Sports News, Scores & Updates | NewsUS`;
  const description = `Stay updated with the latest sports news, scores, match highlights, and updates across categories like ${categoriesList}. Follow breaking sports stories, tournaments, and expert analysis from around the world.`;
  const image = `${siteUrl}/sports-og.jpg`;

  // Enhanced keywords for SEO
  const keywords = subCategories
    .concat([
      'Sports news',
      'Latest scores',
      'Match highlights',
      'Sports analysis',
      'Sports updates',
      'NewsUS',
      'Live scores',
      'Sports 2025',
      'Football news',
      'Cricket news',
      'Basketball updates',
    ])
    .join(', ');

  return {
    title,
    description,
    keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/Sports`,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Latest sports news, scores, and highlights",
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Latest sports news, scores, and highlights",
        },
      ],
    },
    alternates: {
      canonical: `${siteUrl}/Sports`,
    },
  };
}


