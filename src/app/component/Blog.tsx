import Image from "next/image";
import Link from "next/link";
import { serverFetchData } from "../lib/serverFetch";

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
  blogPosts: News[];
}

export default async function Blog() {
  // const blogPosts = await serverFetchData<BlogPost[]>(
  //   "news?category=Blog&sortBy=createdAt&sortOrder=desc&limit=6&page=1",
  //   "no-store"
  // );
 const {blogPosts} = await serverFetchData<NewsApiResponse>(
    'news?category=Sports&sortBy=createdAt&sortOrder=desc&limit=6&page=1',
    'no-store'
  );
  if (!blogPosts || blogPosts.length === 0) return null;

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-GB");

  const truncate = (text: string, maxLength: number) =>
    text?.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className="md:pl-[85px] md:pr-[10px] w-full lg:px-7 md:pt-0 md:py-10 px-2 md:px-0">
      <div className="py-3 flex items-center">
        <p className="w-3 h-6 badge-secondary mr-2"></p>
        <p className="text-3xl font-bold">Blog</p>
      </div>

      <div className="grid lg:grid-cols-8 md:grid-cols-10 grid-cols-1 gap-5">
        {/* Sidebar columns with 4 smaller articles */}
        <div className="lg:col-span-2 md:col-span-3 grid grid-cols-1 gap-3">
          {blogPosts.slice(0, 2).map((post) => (
            <div key={post._id}>
              <Image
                src={post.mainImage}
                alt={post.title}
                width={500}
                height={300}
                className="w-full 2xl:h-80 md:h-52 h-72 object-cover"
              />
              <div className="py-2 px-1">
                <div className="lg:leading-6 2xl:leading-5">
                  <Link
                    href={`/news/${post.slug}`}
                    className="lg:font-semibold font-bold text-[12px] lg:text-[16px]"
                  >
                    {truncate(post.title, 80)}
                  </Link>
                </div>
                <p className="2xl:mt-3 mt-1 lg:leading-3 2xl:leading-4 text-[12px] 2xl:text-[14px]">
                  {truncate(post.description, 150)}
                </p>
                <div className="flex justify-between">
                  <div className="mt-4 flex items-center">
                    <p className="w-1 h-5 badge-secondary mr-2"></p>
                    {post.category}
                  </div>
                  <div className="mt-4 flex items-center">
                    {formatDate(post.createdAt)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 md:col-span-3 grid grid-cols-1 gap-3">
          {blogPosts.slice(2, 4).map((post) => (
            <div key={post._id}>
              <Image
                src={post.mainImage}
                alt={post.title}
                width={500}
                height={300}
                className="w-full 2xl:h-80 md:h-52 h-72 object-cover"
              />
              <div className="py-2 px-1">
                <div className="lg:leading-6 2xl:leading-5">
                  <Link
                    href={`/news/${post.slug}`}
                    className="lg:font-semibold font-bold text-[12px] lg:text-[16px]"
                  >
                    {truncate(post.title, 80)}
                  </Link>
                </div>
                <p className="2xl:mt-3 mt-1 lg:leading-3 2xl:leading-4 text-[12px] 2xl:text-[14px]">
                  {truncate(post.description, 150)}
                </p>
                <div className="flex justify-between">
                  <div className="mt-4 flex items-center">
                    <p className="w-1 h-5 badge-secondary mr-2"></p>
                    {post.category}
                  </div>
                  <div className="mt-4 flex items-center">
                    {formatDate(post.createdAt)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main large blog post */}
        <div className="lg:col-span-4 md:col-span-4">
          {blogPosts[4] && (
            <>
              <Image
                src={blogPosts[4].mainImage}
                alt={blogPosts[4].title}
                width={800}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="py-2 px-1">
                <div className="lg:leading-6 2xl:leading-5">
                  <Link
                    href={`/news/${blogPosts[4].slug}`}
                    className="lg:font-semibold font-bold text-[12px] lg:text-[20px]"
                  >
                    {truncate(blogPosts[4].title, 100)}
                  </Link>
                </div>
                <p className="2xl:mt-3 mt-1 lg:leading-5 2xl:leading-4 text-[12px] lg:text-[14px]">
                  {truncate(blogPosts[4].description, 300)}
                </p>
                <div className="flex justify-between">
                  <div className="mt-4 flex items-center">
                    <p className="w-1 h-5 badge-secondary mr-2"></p>
                    {blogPosts[4].category}
                  </div>
                  <div className="mt-4 flex items-center">
                    {formatDate(blogPosts[4].createdAt)}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
