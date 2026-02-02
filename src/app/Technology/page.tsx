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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.newsus.shop";
  const subCategories = subCategoriesMap['Technology'] || [];
  const categoriesList = subCategories.join(', ');

  const title = `Latest Technology News, Gadgets & Software Updates | NewsUS`;
  const description = `Stay updated with the latest technology news, gadget launches, software updates, and trends across categories like ${categoriesList}. Explore expert reviews, tech innovations, and breaking updates from the world of technology.`;
  const image = `${siteUrl}/technology-og.jpg`;

  // Enhanced keywords for SEO
  const keywords = subCategories
    .concat([
      'Technology news',
      'Gadget launches',
      'Software updates',
      'Tech trends',
      'Latest technology',
      'NewsUS',
      'Tech reviews',
      'AI updates',
      'Mobile technology',
      'Tech 2025',
      'Innovation news',
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
      url: `${siteUrl}/Technology`,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Latest technology news, gadgets, and software updates",
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
          alt: "Latest technology news, gadgets, and software updates",
        },
      ],
    },
    alternates: {
      canonical: `${siteUrl}/Technology`,
    },
  };
}

