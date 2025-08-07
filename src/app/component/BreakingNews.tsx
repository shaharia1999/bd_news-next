// components/BreakingNews.tsx
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { serverFetchData } from '../lib/serverFetch';
// import { serverFetchData } from '@/lib/serverFetch';

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


export default async function BreakingNews() {
  const {news }= await serverFetchData<NewsApiResponse>(
    'news?category=Tranding&sortBy=createdAt&sortOrder=desc&limit=10&page=1',
    'no-store'
  );
  console.log('Breaking news data:', news);
  if (!news || news.length === 0) return null;

  const bannerNews = news[0];
  const marqueeNews = news.slice(1, 5);
  const sideNews = news.slice(1, 9);
  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-GB');

  return (
    <div className="md:pl-[85px] md:pr-[10px] 2xl:mt-24 lg:mt-20 mt-16 w-full lg:px-7 md:py-10">
      <div className="lg:gap-x-8 lg:grid lg:grid-cols-12">
        {/* Left Section */}
        <div className="lg:col-span-8">
          {bannerNews && (
            <article className="text-white relative">
              <div className="relative w-full aspect-[16/9] 2xl:aspect-[16/9] lg:aspect-[16/9] md:aspect-[4/3]">
                <Image
                  src={bannerNews.mainImage}
                  alt={bannerNews.title}
                  fill
                  sizes="(min-width: 1536px) 800px, (min-width: 1024px) 640px, 480px"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div className="flex px-5 pb-3 absolute bottom-0 left-0 flex-col w-full bg-gradient-to-t from-black/70 to-transparent">
                <a
                  href={`/news/${bannerNews.slug}`}
                  className="2xl:text-5xl lg:text-3xl md:text-2xl font-bold hover:text-gray-200"
                >
                  {bannerNews.title}
                </a>
                {/* <p
                  className="mt-3 text-sm"
                  dangerouslySetInnerHTML={{
                    __html: truncate(bannerNews.description, 200),
                  }}
                /> */}
              </div>
            </article>
          )}

          <Marquee speed={50}>
            <div className="flex gap-3 px-2 2xl:py-10 lg:py-3 mt-2 lg:mt-0">
              {marqueeNews.map((item) => (
                <div
                  key={item._id}
                  className="min-w-[300px] text-white relative 2xl:h-[250px] lg:h-[200px]"
                >
                  <div className="relative w-full h-full aspect-[4/3]">
                    <Image
                      src={item.mainImage}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1536px) 300px, (min-width: 1024px) 250px, 200px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="flex px-5 pb-3 absolute bottom-0 left-0 flex-col w-full bg-gradient-to-t from-black/80 to-transparent">
                    <a
                      href={`/news/${item.slug}`}
                      className="text-[16px] 2xl:text-[18px] font-bold hover:text-gray-200"
                    >
                      {item.title}
                    </a>
                    {/* <p
                      className="text-xs mt-1"
                      dangerouslySetInnerHTML={{
                        __html: truncate(item.description, 200),
                      }}
                    /> */}
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 mt-2 lg:mt-0 px-2 md:px-0">
          <article className="grid grid-cols-2 grid-rows-2 2xl:gap-5 gap-2">
            {sideNews.map((item) => (
              <div key={item._id} className="car bg-base-100 2xl:h-96">
                <figure className="relative w-full aspect-[4/3]">
                  <Image
                    src={item.mainImage}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1536px) 220px, (min-width: 1024px) 180px, 140px"
                    style={{ objectFit: 'cover' }}
                  />
                </figure>
                <div className="py-2 px-1">
                  <a
                    href={`/news/${item.slug}`}
                    className="font-bold text-[14px] 2xl:text-[16px] block leading-5 hover:text-primary"
                  >
                    {item.title}
                  </a>
                 
                </div>
                <div className="flex justify-between text-sm">
                  <div className="mt-4 flex items-center">
                    <p className="w-1 h-5 badge-secondary mr-2"></p>
                     Breaking
                  </div>
                  <div className="mt-4 flex items-center">
                    {formatDate(item.createdAt)}
                  </div>
                </div>
                 <div className='flex justify-between text-xs text-gray-400'>
                    <p>{item?.author ? `Author: ${item.author}` : ''}</p>
                    <p>{item?.source ? `Source: ${item.source}` : ''}</p>
                  </div>
                    
              
            {/* <span className='text-blue-500'>learn more</span> */}
              </div>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}
