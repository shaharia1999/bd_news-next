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
    next: { revalidate: 100 }
  }
    );
    console.log(res);
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.newsus.shop';

  const res = await serverFetchData<{ news: NewsItem[] }>(
    'news?category=Sports&limit=1&page=1',
    {
      cache: 'default',
      next: { revalidate: 100 },
    }
  );

  const latest = res?.news?.[0];
  const title = latest?.title || 'Latest Sports News | NewsUs';
  // const title = 'Latest Sports News | NewsUs';
  const description =
    latest?.description?.replace(/<[^>]*>/g, '')?.slice(0, 150) ||
    'Stay updated with the latest sports news, scores, and highlights from around the world.';

  const image = latest?.mainImage?.startsWith('http')
    ? latest.mainImage
    : `${siteUrl}${latest?.mainImage || '/default-og.jpg'}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/Sports`,
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
      canonical: `${siteUrl}/Sports`,
    },
  };
}

