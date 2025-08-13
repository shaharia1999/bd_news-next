import { serverFetchData } from "../lib/serverFetch";
import { subCategoriesMap } from "../lib/subCategories";
import BlogSection from "./components/BlogSection";
// import EntertainmentSection from "./components/EntertainmentSection";


interface NewsItem {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage: string;
  createdAt: string;
}



const EntertainmenPage = async () => {
  const subCategories = subCategoriesMap['Blog'];
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
          <BlogSection
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
  const subCategories = subCategoriesMap['Blog'] || [];
  const categoriesList = subCategories.join(', ');

  const title = `Blog Categories - Latest Articles on ${categoriesList} | NewsUs`;
  const description = `Explore the latest articles across blog categories like ${categoriesList}. Stay informed with curated blogs on tech, lifestyle, health, and more.`;
  const image = `${siteUrl}/default-og.jpg`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/Blog`,
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
      canonical: `${siteUrl}/Blog`,
    },
  };
}

