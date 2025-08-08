// components/BreakingNews.tsx
import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { serverFetchData } from '../lib/serverFetch';
import Link from 'next/link';
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
        {
    cache: 'default',
    next: { revalidate: 300 }
  }
  );
  console.log('Breaking news data:', news);
  if (!news || news.length === 0) return null;

  const bannerNews = news[0];
  const marqueeNews = news.slice(1, 5);
  const sideNews = news.slice(1, 9);
  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-GB');

  return (
    <div className="px-3 md:px-4 2xl:mt-5 lg:mt-5 mt-2 w-full lg:px-7 ">
      <div className="lg:gap-x-8 lg:grid lg:grid-cols-12">
        {/* Left Section */}
        <div className="lg:col-span-8">
          {bannerNews && (
            <article className="text-white relative">
              <div className="relative w-full aspect-[16/9] 2xl:aspect-[16/9] lg:aspect-[16/9] md:aspect-[4/3]">
               <Link      href={`/news/${bannerNews.slug}`}>
                <Image
                  src={bannerNews.mainImage}
                  alt={bannerNews.title}
                  fill
                  sizes="(min-width: 1536px) 800px, (min-width: 1024px) 640px, 480px"
                  style={{ objectFit: 'cover' }}
                  priority
                />
                </Link>
              </div>
              <div className="flex px-5 md:pb-20 pb-10 absolute bottom-0 left-0 flex-col w-full
               bg-gradient-to-t from-black/90 to-transparent">
                <a
                  href={`/news/${bannerNews.slug}`}
                  className="2xl:text-5xl lg:text-3xl mt-20 md:text-2xl text-[18px] font-bold hover:text-gray-200 uppercase font-libertinus"
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
       
            <div className="flex gap-3  2xl:py-10 lg:py-3 mt-2 lg:mt-0">
              {marqueeNews.map((item) => (
                <Link   href={`/news/${item.slug}`} key={item._id}>
                <div
                  key={item._id}
                  className="min-w-[300px] text-white relative
                   2xl:h-[250px] md:h-[200px]
                   h-[150px]"
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
                      className="text-[16px] 2xl:text-[18px] font-bold hover:text-gray-200 capitalize font-libertinus"
                    >
                      {item.title}
                    </a>
              
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </Marquee>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 mt-2 lg:mt-0 ">
          <article className="grid grid-cols-2 grid-rows-2 2xl:gap-5 gap-2">
            {sideNews.map((item) => (
                <Link      href={`/news/${item.slug}`} key={item._id}>
              <div key={item._id} className="car bg-base-100 
              ">
                <figure className="relative w-full overflow-hidden 2xl:h-96 lg:h-[200px] md:h-[200px] h-[150px] aspect-[4/3]">
                  <Image
                    src={item.mainImage}
                    alt={item.title}
                    fill
                      // sizes="(min-width: 1536px) 300px, (min-width: 1024px) 250px, 200px"
                      style={{ objectFit: 'cover'}}
                  />
                </figure>
                <div className="pt-2 px-1">
                  <a
                    href={`/news/${item.slug}`}
                    className="font-bold font-libertinus text-[14px] 2xl:text-[16px] block leading-5 hover:text-primary capitalize"
                  >
                    {item.title}
                  </a>
                 
                </div>
                <div className="flex justify-between text-sm">
                  <div className=" flex items-center text-gray-500">
                    <p className="w-1 h-5 badge-error mr-2"></p>
                     Breaking
                  </div>
                  <div className=" flex items-center text-gray-500 text-sm">
                    {formatDate(item.createdAt)}
                  </div>
                </div>
                 <div className='flex justify-between text-sm pb-2 text-gray-400'>
                    <p>{item?.author ? `Author: ${item.author}` : ''}</p>
                    <p>{item?.source ? `Source: ${item.source}` : ''}</p>
                  </div>
                    
              
            {/* <span className='text-blue-500'>learn more</span> */}
              </div>
              </Link>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}
