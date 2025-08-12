import { notFound } from 'next/navigation';
import { subCategoriesMap } from '../../lib/subCategories';
import { serverFetchData } from '../../lib/serverFetch';
import Link from 'next/link';
import Image from 'next/image';
import { RenderHTMLWithImagesServer } from '../../news/HTMLWithImagesServer';

interface NewsItem {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage: string;
  createdAt: string;
  visitCount?: number | string;
  author?: string;
  source?: string;
}
interface PageProps {
   subcategory: string 
    page?: string 
}
export default async function SubCategoryPage({ params }: { params: Promise<PageProps>}){
   const { subcategory, page } = await params;

  // const page = searchParams?.page;
  const currentPage = parseInt(page || '1', 10);

  const validSubs = subCategoriesMap['Technology'].map((s) => s.toLowerCase());
const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-GB");
  if (!validSubs.includes(subcategory.toLowerCase())) return notFound();

  const res = await serverFetchData<{
    news: NewsItem[];
    pages: number;
  }>(`news?subCategory=${subcategory}&limit=12&page=${currentPage}`,   {
   cache: 'default',
    next: { revalidate: 300 }
  }); // Increased limit to 12 for the layout

  const news = res?.news || [];
  const totalPages = res?.pages || 1;

  // Pagination logic: show max 10 pages with arrows
  const pageRange = 10;
  let startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
  let endPage = startPage + pageRange - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - pageRange + 1);
  }

  const pagesToShow = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);


  // Slice the first two items for the main breaking news section
  const mainBreakingNews = news.slice(0, 2);
  const otherNews = news.slice(2);

  return (
    <div className="px-3 pb-10 w-full">
      <h1 className="text-2xl font-bold capitalize mb-6 mt-5">{subcategory} News</h1>

      {/* Main Breaking News Section */}
      <div className="grid  lg:grid-cols-2 gap-2">
        {mainBreakingNews.map((item) => (
          <Link key={item._id} href={`/news/${item.slug}`} className="block">
            <article className="text-white relative group">
              <div className="m-0 p-0 w-full relative after:absolute after:inset-0 after:bg-slate-800 after:opacity-40 after:transition-opacity after:duration-300 group-hover:after:opacity-60">
                <Image
                  src={item.mainImage}
                  width={1000} // Adjust width and height as needed
                  height={600}
                  className="2xl:h-[500px] lg:h-[320px] md:h-[300px] w-full object-cover"
                  alt={item.title}
                />
              </div>
              <div className="flex px-5 pb-3 absolute bottom-0 left-0 flex-col w-full z-10">
                   <h2 className="2xl:text-5xl lg:text-3xl md:text-2xl text-shadow-md font-bold hover:text-gray-200 capitalize font-libertinus">
                  {item.title}
                </h2>

              </div>
            </article>
            <p className="text-sm text-gray-500 mt-1">
              {formatDate(item.createdAt)}
            </p>
            <div className='flex justify-between text-sm text-gray-400'>
              <p>{item?.author ? `Author: ${item.author}` : ''}</p>
              <p>{item?.source ? `Source: ${item.source}` : ''}</p>
            </div>
              <RenderHTMLWithImagesServer description={item.description} limit={50}
              />
               <span className='text-blue-500'>learn more</span>
          </Link>
        ))}
      </div>

      {/* Sub Breaking News (remaining articles) */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {otherNews.map((item) => (
          <Link key={item._id} href={`/news/${item.slug}`} className="block">
            <div className="border p-3 rounded h-full flex flex-col">
              <img
                src={item.mainImage}
                alt={item.title}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <div className='flex justify-between text-sm text-gray-400'>
                <p>{item?.author ? `Author: ${item.author}` : ''}</p>
                <p>{item?.source ? `Source: ${item.source}` : ''}</p>
              </div>
                <h3 className="font-semibold text-sm mt-2 font-libertinus text-[16px] lg-text-[18px] capitalize">{item.title}</h3>
              <RenderHTMLWithImagesServer description={item.description} limit={50}
              />
                          <span className='text-blue-500'>learn more</span>

            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2 items-center">
          {/* Left Arrow */}
          {currentPage > 1 && (
            <Link
              href={`?page=${currentPage - 1}`}
              className="px-3 py-1 border rounded bg-white text-blue-600 hover:bg-blue-100"
            >
              ‹
            </Link>
          )}

          {/* Page Numbers */}
          {pagesToShow.map((page) => (
            <Link
              key={page}
              href={`?page=${page}`}
              className={`px-3 py-1 border rounded ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-blue-100'
                }`}
            >
              {page}
            </Link>
          ))}

          {/* Right Arrow */}
          {currentPage < totalPages && (
            <Link
              href={`?page=${currentPage + 1}`}
              className="px-3 py-1 border rounded bg-white text-blue-600 hover:bg-blue-100"
            >
              ›
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
export async function generateMetadata({ params }: { params: Promise<PageProps>}){
   const { subcategory, page } = await params;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://newsus.shop';
  const title = `${subcategory.charAt(0).toUpperCase() + subcategory.slice(1)} News - Entertainment | NewsUs`;
  const description = `Explore the latest ${subcategory} news, updates, and trends in the entertainment world at NewsUs.`;

  const res = await serverFetchData<{
    news: NewsItem[];
  }>(
    `news?subCategory=${subcategory}&limit=1&page=1`,
    {
      cache: 'default',
      next: { revalidate: 300 },
    }
  );

  const latest = res?.news?.[0];
  const image = latest?.mainImage?.startsWith('http')
    ? latest.mainImage
    : `${siteUrl}${latest?.mainImage || '/default-og.jpg'}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/Technology/${subcategory}`,
      type: 'article',
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: `${siteUrl}/Technology/${subcategory}`,
    },
  };
}
