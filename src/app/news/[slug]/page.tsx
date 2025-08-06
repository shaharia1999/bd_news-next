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
  category: string;
  createdAt: string;
  images?: string[];
}
interface News {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage: string;
  category: string;
  createdAt: string;
}

interface NewsApiResponse {
  total: number;
  page: number;
  pages: number;
  news: News[];
}
interface Params {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: Params) {
  const { slug } = params;

  // ✅ Fetch single post by slug
  const response = await serverFetchData<{ data: NewsItem; visitCount: number }>(`news/${slug}`, "no-store");
  const post = await response?.data;
//  console.log(post)
  if (!post) {
    return <p className="p-4">Post not found</p>;
  }

   // Fetch related posts by same category, excluding current post by slug or _id
  const {news} = await serverFetchData<NewsApiResponse>(
    `news?category=${post.category}&limit=20&excludeSlug=${slug}`,
    "no-store"
  );
console.log(news)
  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-GB");

  return (
    <div className="md:pl-[85px] md:pr-[10px] 2xl:mt-24 lg:mt-20 mt-16 md:mt-16 w-full lg:px-7 pl-0 md:pt-0 md:py-10">
      <div className="grid grid-cols-4 gap-6">
        {/* Main post content */}
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
            <div className="flex justify-between mt-3 mb-6 text-gray-600">
              <p className="font-semibold">{post.category}</p>
              <p>{formatDate(post.createdAt)}</p>
            </div>
            <div className="prose max-w-none">
              <RenderHTMLWithImagesServer
                description={post.description}
                images={post.images}
              />
            </div>
          </article>
        </div>

        {/* Sidebar related posts */}
        <aside className="lg:col-span-1 col-span-4 space-y-6">
          <h2 className="text-2xl font-semibold mb-4">
            More in {post.category}
          </h2>

          {news && news.length > 0 ? (
            news.map((item) => (
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
                  <h3 className="font-semibold text-lg line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {formatDate(item.createdAt)}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p>No related posts found.</p>
          )}
        </aside>
      </div>
    </div>
  );
}

