import { serverFetchData } from "../lib/serverFetch";
import { subCategoriesMap } from "../lib/subCategories";
import TrendingSection from "./components/TrendingSection";




interface NewsItem {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage: string;
  createdAt: string;
}

const TrendingPage = async () => {
  const subCategories = subCategoriesMap['Tranding'];
  const data: { [key: string]: NewsItem[] } = {};

  for (const sub of subCategories) {
    const res = await serverFetchData<{ news: NewsItem[] }>(
      `news?subCategory=${sub}&limit=8&page=1`,
          {
    cache: 'default',
    next: { revalidate: 60 }
  }
    );
    data[sub] = res?.news ?? [];
  }

  return (
    <div className=" px-3 md:py-10  py-5 lg:px-7 ">
      {Object.entries(data)
        .filter(([_, items]) => items.length > 0) // ✅ Only show sections with data
        .map(([subCategory, items]) => (
          <TrendingSection
            key={subCategory}
            subCategory={subCategory}
            title={subCategory}
            items={items}
          />
        ))}
    </div>
  );
};

export default TrendingPage;
export async function generateMetadata() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.newsus.shop';
  const subCategories = subCategoriesMap['Trending'] || [];
  const categoriesList = subCategories.join(', ');

  const title = `Latest Trending News, Viral Stories & Hot Topics | NewsUS`;
  const description = `Catch up on the latest trending news, viral stories, hot topics, and updates across categories like ${categoriesList}. Stay informed with breaking news, popular stories, and trending events worldwide.`;
  const image = `${siteUrl}/trending-og.jpg`;

  // Enhanced keywords for SEO
  const keywords = subCategories
    .concat([
      'Trending news',
      'Viral stories',
      'Hot topics',
      'Breaking news',
      'Popular stories',
      'NewsUS',
      'Top trends',
      'Trending 2025',
      'Viral updates',
      'Latest news online',
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
      url: `${siteUrl}/Trending`,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Latest trending news and viral stories",
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
          alt: "Latest trending news and viral stories",
        },
      ],
    },
    alternates: {
      canonical: `${siteUrl}/Trending`,
    },
  };
}


