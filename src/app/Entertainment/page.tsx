import { serverFetchData } from "../lib/serverFetch";
import { subCategoriesMap } from "../lib/subCategories";
import EntertainmentSection from "./components/EntertainmentSection";


interface NewsItem {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage: string;
  createdAt: string;
}

const EntertainmenPage = async () => {
  const subCategories = subCategoriesMap['Entertainment'];
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
          <EntertainmentSection
            key={subCategory}
            subCategory={subCategory}
            title={subCategory}
            items={items}
          />
        ))}
    </div>
  );
};

export default EntertainmenPage;


export async function generateMetadata() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.newsus.shop";
  const subCategories = subCategoriesMap['Entertainment'] || [];
  const categoriesList = subCategories.join(', ');

  const title = `Entertainment News - Latest Updates on ${categoriesList} | NewsUS`;
  const description = `Explore the latest entertainment news, celebrity gossip, movie updates, and TV highlights across categories like ${categoriesList}. Stay informed with curated stories on movies, celebrities, TV shows, and trending entertainment events.`;
  const image = `${siteUrl}/default-og.jpg`;

  // Enhanced keywords for SEO
  const keywords = subCategories
    .concat([
      'Entertainment',
      'Movies',
      'Celebrities',
      'TV shows',
      'Latest entertainment news',
      'Trending stories',
      'Hollywood updates',
      'Movie news',
      'TV highlights',
      'Celebrity gossip',
      'Entertainment 2025',
      'Entertainment blogs',
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
      url: `${siteUrl}/Entertainment`,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Entertainment news and updates",
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
          alt: "Entertainment news and updates",
        },
      ],
    },
    alternates: {
      canonical: `${siteUrl}/Entertainment`,
    },
  };
}



