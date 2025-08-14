import Image from "next/image";
import Link from "next/link";
import { serverFetchData } from "../../lib/serverFetch";
import { RenderHTMLWithImagesServer } from "../HTMLWithImagesServer";

interface NewsItem {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage: string;
  subCategory: string;
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
  news: NewsItem[];
}

interface Params {

    slug: string;

}

export async function generateMetadata({ params }: { params: Promise<Params>}) {
  const { slug } = await params;


  const response = await serverFetchData<{ data: NewsItem }>(
    `news/${slug}`,
    {
      cache: 'default',
      next: { revalidate: 100 },
    }
  );

  const post = response?.data;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.newsus.shop';

  const title = post?.title || 'News Details | NewsUS';
  const description =
    post?.description?.replace(/<[^>]*>/g, '')?.slice(0, 150) ||
    'Read the full news article and latest updates from NewsUS.';
  const image = post?.mainImage?.startsWith('http')
    ? post.mainImage
    : `${siteUrl}${post?.mainImage || '/default-og.jpg'}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/news/${slug}`,
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
      canonical: `${siteUrl}/news/${slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<Params>}) {
  const { slug } = await params;

  const response = await serverFetchData<{ data: NewsItem; visitCount: number }>(
    `news/${slug}`,
      {
   cache: 'default',
    next: { revalidate: 100 }
  }
  );

  const post = response?.data;
  console.log(post);
  if (!post) {
    return <p className="p-4">Post not found</p>;
  }

  // Fetch subCategory posts
  const subcetagory = await serverFetchData<NewsApiResponse>(
    `news?subCategory=${post.subCategory}&limit=20&page=1&excludeSlug=${slug}`,
      {
   cache: 'default',
    next: { revalidate: 100 }
  }
  );

  // Fetch category posts
  const category = await serverFetchData<NewsApiResponse>(
    `news?category=${post.category}&limit=20&excludeSlug=${slug}`,
      {
   cache: 'default',
    next: { revalidate: 100 }
  }
  );

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-GB");

  return (
    <div className="px-3 pb-10 w-full lg:px-7">
      <div className="grid grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 col-span-4">
          <article>
            <h1 className="lg:text-3xl font-bold mb-4">{post.title}</h1>
            <Image
              className="2xl:h-[500px] lg:h-[500px] md:h-[400px] w-full object-cover rounded-md"
              alt={post.title}
              src={post.mainImage}
              width={800}
              height={450}
              priority
            />
            <div className="flex justify-between mt-3  text-gray-600">
              {/* <p className="font-semibold">{post.category}</p> */}
              <p>{formatDate(post.createdAt)}</p>
            </div>
                          <div className='flex justify-between text-sm text-gray-400'>
                <p>{post?.author ? `Author: ${post.author}` : ''}</p>
                <p>{post?.source ? `Source: ${post.source}` : ''}</p>
              </div>
            <div className="prose max-w-none">
              <RenderHTMLWithImagesServer
                description={post.description}
                images={post.images}
              />
            </div>
          </article>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 col-span-4 flex flex-col space-y-8">
          {/* SubCategory Section */}
          <div className="flex-1 overflow-y-auto max-h-[80vh] pr-1">
            <h1 className="text-xl font-semibold mb-3">
              More
            </h1>
            {subcetagory?.news?.length ? (
              subcetagory.news.map((item) => (
                <Link
                  key={item._id}
                  href={`/news/${item.slug}`}
                  className="block border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition-shadow duration-200 mb-4"
                >
                  <Image
                    src={item.mainImage}
                    alt={item.title}
                    width={300}
                    height={180}
                    className="w-full object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-semibold text-sm line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {formatDate(item.createdAt)}
                    </p>
                                  <div className='flex justify-between text-sm text-gray-400'>
                <p>{item?.author ? `Author: ${item.author}` : ''}</p>
                <p>{item?.source ? `Source: ${item.source}` : ''}</p>
              </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No related posts found.</p>
            )}
          </div>

          {/* Category Section - Grid layout */}
        
        </aside>
      </div>
        <div>
            <h1 className="text-xl font-semibold mt-5">
              Explore more 
            </h1>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
              {category?.news?.length ? (
                category.news.map((item) => (
                  <Link
                    key={item._id}
                    href={`/news/${item.slug}`}
                    className="block border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition-shadow duration-200"
                  >
                    <Image
                      src={item.mainImage}
                      alt={item.title}
                      width={300}
                      height={180}
                      className="w-full object-cover"
                    />
                    <div className="p-3">
                      <h3 className="font-semibold text-sm line-clamp-2 font-libertinus capitalize">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {formatDate(item.createdAt)}
                      </p>
                                    <div className='flex justify-between text-sm text-gray-400'>
                <p>{item?.author ? `Author: ${item.author}` : ''}</p>
                <p>{item?.source ? `Source: ${item.source}` : ''}</p>
              </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p>No more posts found.</p>
              )}
            </div>
          </div>
    </div>
  );
}
