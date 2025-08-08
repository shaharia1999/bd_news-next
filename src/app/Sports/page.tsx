import { serverFetchData } from "../lib/serverFetch";
import { subCategoriesMap } from "../lib/subCategories";
import SportsSection from "./components/SportsSection";
// import PoliticsSection from "./components/SportsSection";

interface NewsItem {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage: string;
  createdAt: string;
}

const SportsPage = async () => {
  const subCategories = subCategoriesMap['Sports'];
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
    <div className=" px-4 py-10 mt-20">
      {Object.entries(data)
        .filter(([_, items]) => items.length > 0) // ✅ Only show sections with data
        .map(([subCategory, items]) => (
          <SportsSection
            key={subCategory}
            subCategory={subCategory}
            title={subCategory}
            items={items}
          />
        ))}
    </div>
  );
};

export default SportsPage;
