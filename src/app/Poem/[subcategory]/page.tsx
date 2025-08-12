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

  const validSubs = subCategoriesMap['Poem'].map((s) => s.toLowerCase());

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

   const truncate = (text: string, maxLength: number) =>
    text?.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  // Slice the first two items for the main breaking news section
const mainFeatured = news.slice(0, 1);
const sidebarNews = news.slice(1, 5);
const gridNews = news.slice(5);

  return (
    <div className="px-3 pb-10 w-full">
      {/* <h1 className="text-2xl font-bold capitalize mb-6 mt-5">{subcategory} News</h1> */}

   <div className=" w-full">
  <h1 className="text-2xl font-bold capitalize mb-6 mt-5">{subcategory}</h1>

  {/* Featured + Sidebar */}
  <div className="grid lg:grid-cols-3 gap-6">
    {/* Featured Post (2/3 width) */}
    <div className="lg:col-span-2">
      {mainFeatured.map((item) => (
        <Link key={item._id} href={`/news/${item.slug}`} className="block group">
          <div className="relative">
            <Image
              src={item.mainImage}
              width={1000}
              height={600}
              alt={item.title}
              className="w-full h-[400px] object-cover rounded"
            />
            <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black via-transparent text-white">
              <h2 className="text-3xl font-bold group-hover:underline">{item.title}</h2>
             
            </div>
          </div>
            <div className='flex justify-between text-sm text-gray-400'>
                              <p>{item?.author ? `Author: ${item.author}` : ''}</p>
                              <p>{item?.source ? `Source: ${item.source}` : ''}</p>
                            </div>
          
                            <RenderHTMLWithImagesServer description={item.description} limit={20}
                            />
                            <span className='text-blue-500'>learn more</span>
        </Link>
      ))}
    </div>

    {/* Sidebar Posts */}
    <div className="space-y-4">
     {sidebarNews.map((item) => (
  <Link key={item._id} href={`/news/${item.slug}`} className="block">
    <div className="flex items-start space-x-3 border-b pb-4 hover:opacity-80">
      <div className="w-20 h-16 flex-shrink-0">
        <img
          src={item.mainImage}
          alt={item.title}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-sm text-gray-900 leading-snug line-clamp-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{item.author && `By ${item.author}`}</p>
      </div>
    </div>
  </Link>
))}

       {currentPage < totalPages && (
            <Link
              href={`?page=${currentPage + 1}`}
              className="px-3 py-1 border rounded bg-white text-blue-600 hover:bg-blue-100"
            >
               Get More News →
            </Link>
          )}
      {/* <Link href="#" className="text-purple-600 text-sm hover:underline block mt-4">
       
      </Link> */}
    </div>
  </div>

  {/* Grid Section */}
  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {gridNews.map((item) => (
      <Link key={item._id} href={`/news/${item.slug}`} className="block">
        <div className="border rounded overflow-hidden hover:shadow-lg h-full flex flex-col">
          <img
            src={item.mainImage}
            alt={item.title}
            className="w-full h-40 object-cover"
          />
          <div className="p-3 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="font-semibold text-base">{item.title}</h3>
              <p
                className="text-sm text-gray-600 mt-1"
                dangerouslySetInnerHTML={{
                  __html: truncate(item?.description, 120),
                }}
              />
            </div>
            <div className="mt-2 text-sm text-gray-400 flex justify-between">
              <span>{item.author && `Author: ${item.author}`}</span>
              <span>{item.source && `Source: ${item.source}`}</span>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>

  {/* Pagination (unchanged) */}
  {/* ... keep your existing pagination logic here ... */}
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
              className={`px-3 py-1 border rounded ${
                currentPage === page ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 hover:bg-blue-100'
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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.newsus.shop';
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
      url: `${siteUrl}/Poem/${subcategory}`,
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
      canonical: `${siteUrl}/Poem/${subcategory}`,
    },
  };
}
