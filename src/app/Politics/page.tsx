import { serverFetchData } from "../lib/serverFetch";
import { subCategoriesMap } from "../lib/subCategories";
import PoliticsSection from "./components/PoliticsSection";

interface NewsItem {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage: string;
  createdAt: string;
}

const PoliticsPage = async () => {
  const subCategories = subCategoriesMap['Politics'];
  const data: { [key: string]: NewsItem[] } = {};

  for (const sub of subCategories) {
    const res = await serverFetchData<{ news: NewsItem[] }>(
      `news?subCategory=${sub}&limit=8&page=1`,
         {
    cache: 'default',
    next: { revalidate: 300 }
  }
    );
    data[sub] = res?.news ?? [];
  }

  return (
    <div className=" px-4 py-10 mt-20">
      {Object.entries(data)
        .filter(([_, items]) => items.length > 0) // ✅ Only show sections with data
        .map(([subCategory, items]) => (
          <PoliticsSection
            key={subCategory}
            subCategory={subCategory}
            title={subCategory}
            items={items}
          />
        ))}
    </div>
  );
};

export default PoliticsPage;
export async function generateMetadata() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://newsus.shop';

  const res = await serverFetchData<{ news: NewsItem[] }>(
    'news?category=Politics&limit=1&page=1',
    {
      cache: 'default',
      next: { revalidate: 300 },
    }
  );

  const latest = res?.news?.[0];

  const title = 'Latest Political News | NewsUs';
  const description =
    latest?.description?.replace(/<[^>]*>/g, '')?.slice(0, 150) ||
    'Get the latest political news, analysis, and updates from around the world.';

  const image = latest?.mainImage?.startsWith('http')
    ? latest.mainImage
    : `${siteUrl}${latest?.mainImage || '/default-og.jpg'}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/politics`,
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

