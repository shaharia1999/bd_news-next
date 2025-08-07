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
  visitCount?: number |string;
  author?:string;
  source?: string;
}

interface NewsApiResponse {
  total: number;
  page: number;
  pages: number;
  news: News[];
}

export default async function Sports() {
  const {news} = await serverFetchData<NewsApiResponse>(
    'news?category=Sports&sortBy=createdAt&sortOrder=desc&limit=6&page=1',
    'no-store'
  );

  if (!news || news.length === 0) return null;

  const leftNews = news.slice(0, 2);
  const mainNews = news[2];
  const rightNews = news.slice(3, 5);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-GB');

  const truncate = (text: string, maxLength: number) =>
    text?.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  return (
    <div className="md:pl-[85px] md:pr-[10px] w-full lg:px-7 md:py-10 px-2 md:px-0">
      <div className="py-3 flex items-center">
        <p className="w-3 h-6 badge-secondary mr-2"></p>
        <p className="text-3xl font-bold">Sports</p>
      </div>

      <div className="grid lg:grid-cols-8 md:grid-cols-10 grid-cols-1 gap-5">
        {/* Left Column */}
        <div className="lg:col-span-2 md:col-span-3 grid grid-cols-1 gap-3">
          {leftNews.map((item) => (
            <div key={item._id} className="w-full">
              <div className="relative w-full h-52 2xl:h-80">
                <Image
                  src={item.mainImage}
                  alt={item?.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="py-2 px-1">
                <Link
                  href={`/news/${item.slug}`}
                  className="lg:font-semibold font-bold text-[12px] lg:text-[16px] block lg:leading-6 2xl:leading-5"
                >
                  {truncate(item.title, 80)}
                </Link>
                <div className="flex justify-between text-sm">
                  <div className="mt-4 flex items-center">
                    <p className="w-1 h-5 badge-secondary mr-2"></p>
                    {item.category}
                  </div>
                  <div className="mt-4 flex items-center">
                    {formatDate(item.createdAt)}
                  </div>
                </div>
                 <div className='flex justify-between text-xs text-gray-400'>
                    <p>{item?.author ? `Author: ${item.author}` : ''}</p>
                    <p>{item?.source ? `Source: ${item.source}` : ''}</p>
                  </div>
                    
                <RenderHTMLWithImagesServer description={item.description} limit={30}
              />
            <span className='text-blue-500'>learn more</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Center Column */}
        {
          mainNews &&     <div className="lg:col-span-4 md:col-span-4">
          <div className="relative w-full h-[300px] md:h-[400px] 2xl:h-[500px]">
            <Image
              src={mainNews.mainImage}
              alt={mainNews.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="py-2 px-1">
            <Link
              href={`/news/${mainNews?.slug}`}
              className="lg:font-semibold font-bold text-[12px] lg:text-[20px] block lg:leading-6 2xl:leading-5"
            >
              {truncate(mainNews?.title, 100)}
            </Link>
           
            <div className="flex justify-between text-sm">
              <div className="mt-4 flex items-center">
                <p className="w-1 h-5 badge-secondary mr-2"></p>
                {mainNews?.category}
              </div>
              <div className="mt-4 flex items-center">
                {formatDate(mainNews?.createdAt)}
              </div>
            </div>
             <div className='flex justify-between text-xs text-gray-400'>
                    <p>{mainNews?.author ? `Author: ${mainNews.author}` : ''}</p>
                    <p>{mainNews?.source ? `Source: ${mainNews.source}` : ''}</p>
                  </div>
                    
                <RenderHTMLWithImagesServer description={mainNews.description} limit={200}
              />
            <span className='text-blue-500'>learn more</span>
          </div>
        </div>
        }
    
        {/* Right Column */}
        <div className="lg:col-span-2 md:col-span-3 grid grid-cols-1 gap-3">
          {rightNews.map((item) => (
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
                  className="lg:font-semibold font-bold text-[12px] lg:text-[16px] block lg:leading-6 2xl:leading-5"
                >
                  {truncate(item.title, 80)}
                </Link>
                <div className="flex justify-between text-sm">
                  <div className="mt-4 flex items-center">
                    <p className="w-1 h-5 badge-secondary mr-2"></p>
                    {item.category}
                  </div>
                  <div className="mt-4 flex items-center">
                    {formatDate(item.createdAt)}
                  </div>
                </div>
                 <div className='flex justify-between text-xs text-gray-400'>
                    <p>{item?.author ? `Author: ${item.author}` : ''}</p>
                    <p>{item?.source ? `Source: ${item.source}` : ''}</p>
                  </div>
                    
                <RenderHTMLWithImagesServer description={item.description} limit={30}
              />
            <span className='text-blue-500'>learn more</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
