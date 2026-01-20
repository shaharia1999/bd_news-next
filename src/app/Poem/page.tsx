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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bd-news-next.vercel.app';
  const subCategories = subCategoriesMap['Poem'] || [];
  const categoriesList = subCategories.join(', ');

  const title = `Latest Poems - Updates on ${categoriesList} | NewsUS`;
  const description = `Explore the latest poems, poetry updates, and featured works across categories like ${categoriesList}. Stay inspired with curated poetry from talented writers around the world.`;
  const image = `${siteUrl}/default-og.jpg`;

  // Enhanced keywords for SEO
  const keywords = subCategories
    .concat([
      'Poems',
      'Poetry',
      'Latest Poems',
      'Trending Poems',
      'Poetry Updates',
      'NewsUS',
      'Featured Poems',
      'Poetry 2025',
      'Poem Blog',
      'Poetry Collections',
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
      url: `${siteUrl}/Poem`,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Latest poems and poetry updates",
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
          alt: "Latest poems and poetry updates",
        },
      ],
    },
    alternates: {
      canonical: `${siteUrl}/Poem`,
    },
  };
}



