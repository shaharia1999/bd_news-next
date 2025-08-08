import { serverFetchData } from "../lib/serverFetch";
import { subCategoriesMap } from "../lib/subCategories";
import TrendingSection from "./components/TrendingSection";




interface NewsItem {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage: string;
  createdAt: string;
}

const TrendingPage = async () => {
  const subCategories = subCategoriesMap['Tranding'];
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
          <TrendingSection
            key={subCategory}
            subCategory={subCategory}
            title={subCategory}
            items={items}
          />
        ))}
    </div>
  );
};

export default TrendingPage;
