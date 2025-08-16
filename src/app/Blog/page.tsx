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

  const title = `Blog Categories - Latest Articles on ${categoriesList} | NewsUS`;
  const description = `Explore the latest articles across blog categories like ${categoriesList}. Stay informed with curated blogs on tech, lifestyle, health, finance, travel, and more.`;
  const image = `${siteUrl}/default-og.jpg`;

  // Enhanced keywords for SEO
  const keywords = subCategories
    .concat([
      'Blog',
      'NewsUS',
      'latest blogs',
      'top articles',
      'daily updates',
      'trending stories',
      'Health tips blog',
      'Finance advice articles',
      'Travel guides online',
      'Lifestyle blogs 2025',
      'Technology insights',
      'Entertainment news',
      'Poetry blog',
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
      url: `${siteUrl}/Blog`,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Blog news and articles",
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
          alt: "Blog news and articles",
        },
      ],
    },
    alternates: {
      canonical: `${siteUrl}/Blog`,
    },
  };
}



