import Image from "next/image";
import Link from "next/link";
import { serverFetchData } from "../lib/serverFetch";
import { RenderHTMLWithImagesServer } from "../news/HTMLWithImagesServer";

interface News {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage: string;
  category: string;
  createdAt: string;
  images?: string[];
  visitCount?: number | string;
  author?: string;
  source?: string;
}

interface NewsApiResponse {
  total: number;
  page: number;
  pages: number;
  news: News[];
}

export default async function Education() {
  // const news = await serverFetchData<News[]>(
  //   "news?category=Education&sortBy=createdAt&sortOrder=desc&limit=8&page=1",
  //   "no-store"
  // );
  const { news } = await serverFetchData<NewsApiResponse>(
    'news?category=Technology&sortBy=createdAt&sortOrder=desc&limit=6&page=1',
    {
      cache: 'default',
      next: { revalidate: 300 }
    }
  );
  if (!news || news.length === 0) return null;

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-GB");

  const truncate = (text: string, maxLength: number) =>
    text?.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className=" md:pr-[10px] w-full lg:px-7 lg:pb-32 pb-20">
      <div className="py-3 flex items-center">
        <p className="w-3 h-6 badge-error mr-2"></p>
        <p className="lg:text-3xl font-bold font-libertinus">Technology</p>
      </div>

      <div className="All-News grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-3 2xl:gap-8">
        {news.map((item) => (
          <article key={item._id}>
            <Link href={`/news/${item.slug}`} key={item._id}>

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
                      className="font-bold text-[16px] lg:text-[18px] capitalize font-libertinus"
                    >
                      {truncate(item.title, 90)}
                    </Link>
                  </div>
                  <div className="flex justify-between text-gray-500 text-sm">
                    {/* <div className="mt-4 flex items-center "> */}
                      {/* <p className="w-1 h-5 badge-error mr-2"></p>
                      {item.category}
                    </div> */}
                    <div className=" flex items-center">
                      {formatDate(item.createdAt)}
                    </div>
                  </div>
                  <div className='flex justify-between text-sm pb-2 text-gray-400'>
                    <p>{item?.author ? `Author: ${item.author}` : ''}</p>
                    <p>{item?.source ? `Source: ${item.source}` : ''}</p>
                  </div>

                  <RenderHTMLWithImagesServer description={item.description} limit={30}
                  />
                  <span className='text-blue-500'>learn more</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
