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
    next: { revalidate: 300 }
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.newsus.shop';

  const subCategories = subCategoriesMap['Entertainment'] || [];
  const categoryList = subCategories.join(', ');

  // Optionally fetch latest trending entertainment news title
  const {news} = await serverFetchData<{ news: NewsItem[] }>(
    'news?category=Entertainment&sortBy=createdAt&sortOrder=desc&limit=1&page=1',
    { cache: 'default' }
  );
  const latestTitle = news?.[0]?.title;

  const title =
    latestTitle ||
    `Entertainment News - Movies, Celebrities & TV | NewsUs`;

  const description =
    `Get the latest entertainment news, celebrity gossip, movie updates, and TV highlights. Trending stories on ${categoryList}.`;

  const image = `${siteUrl}/default-og.jpg`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/Entertainment`,
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
      canonical: `${siteUrl}/Entertainment`,
    },
  };
}


