import { serverFetchData } from "../lib/serverFetch";
import { subCategoriesMap } from "../lib/subCategories";
import TechnologySection from "./components/TechnogySection";


interface NewsItem {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage: string;
  createdAt: string;
}

const TechnologyPage = async () => {
  const subCategories = subCategoriesMap['Technology'];
  const data: { [key: string]: NewsItem[] } = {};

  for (const sub of subCategories) {
    const res = await serverFetchData<{ news: NewsItem[] }>(
      `news?subCategory=${sub}&limit=8&page=1`,
           {
    cache: 'default',
    next: { revalidate: 100 }
  }
    );
    data[sub] = res?.news ?? [];
  }

  return (
    <div className=" px-3 md:py-10  py-5 lg:px-7 ">
      {Object.entries(data)
        .filter(([_, items]) => items.length > 0) // ✅ Only show sections with data
        .map(([subCategory, items]) => (
          <TechnologySection
            key={subCategory}
            subCategory={subCategory}
            title={subCategory}
            items={items}
          />
        ))}
    </div>
  );
};

export default TechnologyPage;
export async function generateMetadata() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.newsus.shop';

  const res = await serverFetchData<{ news: NewsItem[] }>(
    'news?category=Technology&limit=1&page=1',
    {
      cache: 'default',
      next: { revalidate: 100 },
    }
  );

  const latest = res?.news?.[0];
  const title = latest?.title || 'Latest Technology News | NewsUs';
  // const title = 'Latest Tech News | NewsUs';
  const description =
    latest?.description?.replace(/<[^>]*>/g, '')?.slice(0, 150) ||
    'Stay updated with the latest technology news, gadget launches, and software updates.';

  const image = latest?.mainImage?.startsWith('http')
    ? latest.mainImage
    : `${siteUrl}${latest?.mainImage || '/default-og.jpg'}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/Technology`,
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
      canonical: `${siteUrl}/Technology`,
    },
  };
}

