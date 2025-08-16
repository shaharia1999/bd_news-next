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

interface Props {
  subCategory: string;
  title: string;
  items: NewsItem[];
}

const PoemSection = ({ subCategory, title, items }: Props) => {
  

  if (items.length === 0) return null;

  const mainArticle = items[0];
  const leftArticles = items.slice(1, 3);
  const rightArticles = items.slice(3, 5);

  return (
    <div className="mb-2">
      <h3 className="text-2xl font-bold mb-6 border-b-2 border-gray-300 pb-2">{title}</h3>

      <div className="grid lg:grid-cols-8 md:grid-cols-10 grid-cols-1 gap-5 2xl:mt-20 lg:mt-12 mt-8">
        {/* Left Section - up to 2 articles */}
        {leftArticles.length > 0 && (
          <div className="lg:col-span-2 md:col-span-3 grid grid-cols-1 gap-3">
            {leftArticles.map((item) => (
              <Link key={item._id} href={`/news/${item.slug}`} className="block group w-full">
                <Image
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                  src={item.mainImage}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full 2xl:h-80 lg:h-52 object-cover"
                />
                <div className="py-2 px-1">
                  <div className="lg:leading-6 2xl:leading-5">
                    <h3 className="lg:font-semibold font-bold text-[15px] lg:text-[18px] capitalize font-libertinus">
                      {item.title}
                    </h3>
                  </div>
                     <div className="flex justify-between text-sm text-gray-500 ">
                    {/* <div className="flex items-center">
                      <p className="w-1 h-5 badge-error mr-2"></p>
                      {subCategory}
                    </div> */}
                    <div className="flex items-center">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </div>
                  </div>

                  <div className='flex justify-between text-sm pb-2 text-gray-400'>
                    <p>{item?.author ? `Author: ${item.author}` : ''}</p>
                    <p>{item?.source ? `Source: ${item.source}` : ''}</p>
                  </div>
                  <RenderHTMLWithImagesServer description={item.description} limit={20}
                  />
                  <span className='text-blue-500'>learn more</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Center Section - main article */}
        <div className="lg:col-span-4 md:col-span-4">
          <Link href={`/news/${mainArticle.slug}`} className="block group">
            <Image
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

              src={mainArticle.mainImage}
              alt={mainArticle.title}
              width={400}
              height={400}
              className="w-full object-cover h-[300px] md:h-[400px] 2xl:h-[500px]"
            />
            <div className="py-2 px-1">
              <div className="lg:leading-6 2xl:leading-5">
                      <h3 className="lg:font-semibold font-bold text-[15px] lg:text-[20px] capitalize font-libertinus">
                  {mainArticle.title}
                </h3>
              </div>
              <div className="flex justify-between text-sm text-gray-500 ">
                {/* <div className="flex items-center">
                  <p className="w-1 h-5 badge-error mr-2"></p>
                  {subCategory}
                </div> */}
                <div className="flex items-center">
                  {new Date(mainArticle.createdAt).toLocaleDateString()}
                </div>

              </div>
              <div className='flex justify-between text-sm text-gray-400'>
                <p>{mainArticle?.author ? `Author: ${mainArticle.author}` : ''}</p>
                <p>{mainArticle?.source ? `Source: ${mainArticle.source}` : ''}</p>
              </div>
              <div>
                <RenderHTMLWithImagesServer description={mainArticle.description} limit={200}

                />
                <span className='text-blue-500'>learn more</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Right Section - up to 2 articles */}
        {rightArticles.length > 0 && (
          <div className="lg:col-span-2 md:col-span-3 grid grid-cols-1 gap-3">
            {rightArticles.map((item) => (
              <Link key={item._id} href={`/news/${item.slug}`} className="block group w-full">
                <Image
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                  src={item.mainImage}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full 2xl:h-80 lg:h-52 object-cover"
                />
                <div className="py-2 px-1">
                  <div className="lg:leading-6 2xl:leading-5">
                    <h3 className="lg:font-semibold font-bold text-[15px] lg:text-[18px] capitalize font-libertinus">
                      {item.title}
                    </h3>
                  </div>
                     <div className="flex justify-between text-sm text-gray-500 ">
                    {/* <div className="flex items-center">
                      <p className="w-1 h-5 badge-error mr-2"></p>
                      {subCategory}
                    </div> */}
                    <div className="flex items-center">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <div className='flex justify-between text-sm pb-2 text-gray-400'>
                    <p>{item?.author ? `Author: ${item.author}` : ''}</p>
                    <p>{item?.source ? `Source: ${item.source}` : ''}</p>
                  </div>

                  <RenderHTMLWithImagesServer description={item.description} limit={20}
                  />
                  <span className='text-blue-500'>learn more</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="text-right mt-6">
        <Link href={`/Poem/${subCategory}`}>
          <button className="text-blue-600 hover:underline font-semibold">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default PoemSection;
