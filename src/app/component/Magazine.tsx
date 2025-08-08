import Image from 'next/image';
import Link from 'next/link';
import { serverFetchData } from '../lib/serverFetch';
import { RenderHTMLWithImagesServer } from '../news/HTMLWithImagesServer';

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
export default async function Magazine() {
  // const news = await serverFetchData<News[]>(
  //   'news?category=Magazine&sortBy=createdAt&sortOrder=desc&limit=6&page=1',
  //   'no-store'
  // );
  const { news } = await serverFetchData<NewsApiResponse>(
    'news?category=Entertainment&sortBy=createdAt&sortOrder=desc&limit=6&page=1',
        {
    cache: 'default',
    next: { revalidate: 300 }
  }
  );
  if (!news || news.length === 0) return null;

  const mainNews = news[0];
  const leftNews = news.slice(1, 3);
  const rightNews = news.slice(3, 5);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-GB');

  const truncate = (text: string, maxLength: number) =>
    text?.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  return (
    <div className=" w-full lg:px-7 px-3">
      <div className="py-3 flex items-center">
        <p className="w-3 h-6 badge-error mr-2"></p>
        <p className="text-2xl lg:text-3xl font-bold">Magazine</p>
      </div>

      <div className="grid lg:grid-cols-8 md:grid-cols-10 grid-cols-1 gap-5">
        {/* Main Column */}
        <div className="lg:col-span-4 md:col-span-4">
           <Link      href={`/news/${mainNews.slug}`}>
          <div className="relative w-full h-[300px] md:h-[400px] 2xl:h-[500px]">
            <Image
              src={mainNews.mainImage}
              alt={mainNews.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          </Link>
          <div className="py-2 px-1">
            <Link
              href={`/news/${mainNews.slug}`}
              className="lg:font-semibold font-bold text-[16px] lg:text-[20px] block lg:leading-6 2xl:leading-5 capitalize font-libertinus"
            >
              {truncate(mainNews.title, 100)}
            </Link>

            <div className="flex justify-between text-sm text-gray-500">
              {/* <div className="mt-4 flex items-center">
                <p className="w-1 h-5 badge-error mr-2"></p>
                {mainNews.category}
              </div> */}
              <div className=" flex items-center">
                {formatDate(mainNews.createdAt)}
              </div>

            </div>
            <div className='flex justify-between text-sm text-gray-400'>
              <p>{mainNews?.author ? `Author: ${mainNews.author}` : ''}</p>
              <p>{mainNews?.source ? `Source: ${mainNews.source}` : ''}</p>
            </div>

            <RenderHTMLWithImagesServer description={mainNews.description} limit={200}
            />
            <span className='text-blue-500'>learn more</span>
          </div>
        </div>

        {/* Left Column */}
        <div className="lg:col-span-2 md:col-span-3 grid grid-cols-1 gap-3">
          {leftNews.map((item) => (
                            <Link      href={`/news/${item.slug}`} key={item._id}>

            <div key={item._id}>
              <div className="relative w-full h-52 2xl:h-80">
                <Image
                  src={item.mainImage}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="py-2 px-1">
                <Link
                  href={`/news/${item.slug}`}
                  className="lg:font-semibold font-bold text-[16px] lg:text-[18px] block lg:leading-6 2xl:leading-5 capitalize font-libertinus"
                >
                  {truncate(item.title, 80)}
                </Link>
                <div className="flex justify-between text-sm text-gray-500">
                  {/* <div className="mt-4 flex items-center">
                    <p className="w-1 h-5 badge-error mr-2"></p>
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
                    
                <RenderHTMLWithImagesServer description={item.description} limit={50}
              />
            <span className='text-blue-500'>learn more</span>
              </div>
            </div>
            </Link>
          ))}
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 md:col-span-3 grid grid-cols-1 gap-3">
          {rightNews.map((item) => (
                            <Link      href={`/news/${item.slug}`} key={item._id}>

            <div key={item._id}>
              <div className="relative w-full h-52 2xl:h-80">
                <Image
                  src={item.mainImage}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="py-2 px-1">
                <Link
                  href={`/news/${item.slug}`}
                  className="lg:font-semibold font-bold text-[16px] lg:text-[18px] block lg:leading-6 2xl:leading-5 capitalize font-libertinus"
                >
                  {truncate(item.title, 80)}
                </Link>
                <div className="flex justify-between text-sm">
                  {/* <div className="mt-4 flex items-center">
                    <p className="w-1 h-5 badge-error mr-2"></p>
                    {item.category}
                  </div> */}
                  <div className=" flex items-center">
                    {formatDate(item.createdAt)}
                  </div>
                </div>
                <div className='flex justify-between text-sm text-gray-400'>
                  <p>{item?.author ? `Author: ${item.author}` : ''}</p>
                  <p>{item?.source ? `Source: ${item.source}` : ''}</p>
                </div>

                <RenderHTMLWithImagesServer description={item.description} limit={50}
                />
                <span className='text-blue-500'>learn more</span>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
