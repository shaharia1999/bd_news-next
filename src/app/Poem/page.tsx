import { serverFetchData } from "../lib/serverFetch";
import { subCategoriesMap } from "../lib/subCategories";
import PoemSection from "./components/PoliticsSection";



interface NewsItem {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage: string;
  createdAt: string;
}

const PoemPage = async () => {
  const subCategories = subCategoriesMap['Poem'];
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
    <div className=" px-3 md:py-10  py-5 lg:px-7 ">
      {Object.entries(data)
        .filter(([_, items]) => items.length > 0) // ✅ Only show sections with data
        .map(([subCategory, items]) => (
          <PoemSection
            key={subCategory}
            subCategory={subCategory}
            title={subCategory}
            items={items}
          />
        ))}
    </div>
  );
};

export default PoemPage;



export async function generateMetadata() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://newsus.shop';

  const res = await serverFetchData<{ news: any[] }>(
    'news?category=Poem&limit=1&page=1',
    {
      cache: 'default',
      next: { revalidate: 300 },
    }
  );

  const latest = res?.news?.[0];

  const title = 'Latest Poems | NewsUs';
  const description =
    latest?.description?.replace(/<[^>]*>/g, '')?.slice(0, 150) ||
    'Discover the latest poems and poetry updates from around the world.';

  const image = latest?.mainImage?.startsWith('http')
    ? latest.mainImage
    : `${siteUrl}${latest?.mainImage || '/default-og.jpg'}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/Poem`,
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
      canonical: `${siteUrl}/Poem`,
    },
  };
}

