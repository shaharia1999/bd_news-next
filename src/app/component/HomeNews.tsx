// components/HomeNews.tsx
import Image from 'next/image';
import { serverFetchData } from '../lib/serverFetch';
import { RenderHTMLWithImagesServer } from '../news/HTMLWithImagesServer';
import Link from 'next/link';

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

export default async function HomeNews() {
  const {news }= await serverFetchData<NewsApiResponse>(
    'news?sortBy=createdAt&sortOrder=desc&limit=6&page=1',
        {
    cache: 'default',
    next: { revalidate: 300 }
  }
  );

  if (!news || news.length === 0) return null;



  return (
    <div className="md:pl-[85px] md:pr-[10px] w-full lg:px-7 md:pt-0 md:py-10 px-2 md:px-0">
      <div className="py-3 flex items-center">
        <p className="w-3 h-6 badge-secondary mr-2"></p>
        <p className="text-3xl font-bold">News</p>
      </div>
      <div className="All-News grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-3 2xl:gap-8">
        {news?.map((item) => (
                            <Link      href={`/news/${item.slug}`} key={item._id}>

          <article key={item._id}>
            <div className="car bg-base-100  2xl:h-auto">
              <figure className="relative w-full 2xl:h-96 md:h-60 aspect-[4/3]">
                <Image
                  src={item?.mainImage}
                  alt={item?.title}
                  fill
                  sizes="(min-width: 1536px) 500px, (min-width: 768px) 400px, 300px"
                  style={{ objectFit: 'cover' }}
                />
              </figure>
              <div className="py-2 px-1">
                <div className="lg:leading-6 2xl:leading-5">
                  <a
                    href={`/news/${item?.slug}`}
                    className="font-bold text-[12px] lg:text-[20px] hover:text-primary"
                  >
                    {item?.title}
                  </a>
                </div>
                
                <div className="flex justify-between">
                  <div className="mt-4 flex items-center">
                    <p className="w-1 h-5 badge-secondary mr-2"></p>
                    {item.category}
                  </div>
                  <div className="mt-4 flex items-center">
                    {new Date(item.createdAt).toLocaleDateString('en-GB')}
                  </div>
                </div>
                 <div className='flex justify-between text-xs text-gray-400'>
                    <p>{item?.author ? `Author: ${item.author}` : ''}</p>
                    <p>{item?.source ? `Source: ${item.source}` : ''}</p>
                  </div>
                    
                <RenderHTMLWithImagesServer description={item.description} limit={50}
              />
            <span className='text-blue-500'>learn more</span>
              </div>
            </div>
          </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
