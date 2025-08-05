import Image from "next/image";
import Link from "next/link";
import { serverFetchData } from "../lib/serverFetch";

interface News {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage: string;
  category: string;
  createdAt: string;
}

export default async function Education() {
  // const news = await serverFetchData<News[]>(
  //   "news?category=Education&sortBy=createdAt&sortOrder=desc&limit=8&page=1",
  //   "no-store"
  // );
 const news = await serverFetchData<News[]>(
    'news?category=Sports&sortBy=createdAt&sortOrder=desc&limit=6&page=1',
    'no-store'
  );
  if (!news || news.length === 0) return null;

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-GB");

  const truncate = (text: string, maxLength: number) =>
    text?.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className="md:pl-[85px] md:pr-[10px] w-full lg:px-7 md:pt-0 md:py-10 px-2 md:px-0">
      <div className="py-3 flex items-center">
        <p className="w-3 h-6 badge-secondary mr-2"></p>
        <p className="text-3xl font-bold">Education</p>
      </div>

      <div className="All-News grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-3 2xl:gap-8">
        {news.map((item) => (
          <article key={item._id}>
            <div className="car bg-base-100 md:h-auto lg:h-[400px] 2xl:h-[450px]">
              <figure>
                <Image
                  src={item.mainImage}
                  width={500}
                  height={500}
                  alt={item.title}
                  className="2xl:h-72 md:h-52 w-full object-cover"
                />
              </figure>
              <div className="py-2 px-1">
                <div className="lg:leading-6 2xl:leading-5">
                  <Link
                    href={`/news/${item.slug}`}
                    className="font-bold text-[12px] lg:text-[16px]"
                  >
                    {truncate(item.title, 90)}
                  </Link>
                </div>
                <div className="flex justify-between">
                  <div className="mt-4 flex items-center">
                    <p className="w-1 h-5 badge-secondary mr-2"></p>
                    {item.category}
                  </div>
                  <div className="mt-4 flex items-center">
                    {formatDate(item.createdAt)}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
