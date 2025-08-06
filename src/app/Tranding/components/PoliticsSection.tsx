import Link from 'next/link';
import Image from 'next/image'; // Assuming you use Next.js Image component

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

const PoliticsSection = ({ subCategory, title, items }: Props) => {
   const truncate = (text: string, maxLength: number) =>
    text?.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  // Ensure we have at least 5 items before slicing
  if (items.length < 5) {
    // You can handle this case by either returning null or a different layout
    // For now, we'll return null to prevent errors
    return null;
  }

  // Slice the data for the new layout
  const mainArticle = items[0];
  const leftArticles = items.slice(1, 3);
  const rightArticles = items.slice(3, 5);

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-300 pb-2">{title}</h2>

      <div className="grid lg:grid-cols-8 md:grid-cols-10 grid-cols-1 gap-5 2xl:mt-20 lg:mt-12 mt-8">
        
        {/* Left Section - 2 articles */}
        <div className="lg:col-span-2 md:col-span-3 grid grid-cols-1 gap-3">
          {leftArticles.map((item) => (
            <Link key={item._id} href={`/news/${item.slug}`} className="block group w-full">
              <Image 
                src={item.mainImage}
                alt={item.title}
                width={500} // Adjust as needed
                height={300} // Adjust as needed
                className="w-full 2xl:h-80 lg:h-52 object-cover"
              />
              <div className="py-2 px-1">
                <div className="lg:leading-6 2xl:leading-5">
                  <h3 className="lg:font-semibold font-bold text-[12px] lg:text-[16px]">
                    {item.title}
                  </h3>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-4">
                  <div className="flex items-center">
                    <p className="w-1 h-5 badge-secondary mr-2"></p>
                    {subCategory}
                  </div>
                  <div className="flex items-center">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Center Section - 1 main article */}
        <div className="lg:col-span-4 md:col-span-4 h-mx-[400px]">
          <Link href={`/news/${mainArticle.slug}`} className="block group">
            <Image 
              src={mainArticle.mainImage}
              alt={mainArticle.title}
              width={400} // Adjust as needed
              height={400} // Adjust as needed
              className="w-full object-cover h-[300px] md:h-[400px] 2xl:h-[500px]"
            />
            <div className="py-2 px-1">
              <div className="lg:leading-6 2xl:leading-5">
                <h3 className="lg:font-semibold font-bold text-[12px] lg:text-[20px]">
                  {mainArticle.title}
                </h3>
              </div>
              
              
              <div className="flex justify-between text-xs text-gray-500 mt-4">
                <div className="flex items-center">
                  <p className="w-1 h-5 badge-secondary mr-2"></p>
                  {subCategory}
                </div>
                <div className="flex items-center">
                  {new Date(mainArticle.createdAt).toLocaleDateString()}
                </div>
              </div>
              <div> <p
                  className="mt-3 text-sm"
                  dangerouslySetInnerHTML={{
                    __html: truncate(mainArticle.description, 1000),
                  }}
                /></div>
            </div>
          </Link>
        </div>

        {/* Right Section - 2 articles */}
        <div className="lg:col-span-2 md:col-span-3 grid grid-cols-1 gap-3">
          {rightArticles.map((item) => (
            <Link key={item._id} href={`/news/${item.slug}`} className="block group w-full">
              <Image 
                src={item.mainImage}
                alt={item.title}
                width={500} // Adjust as needed
                height={300} // Adjust as needed
                className="w-full 2xl:h-80 lg:h-52 object-cover"
              />
              <div className="py-2 px-1">
                <div className="lg:leading-6 2xl:leading-5">
                  <h3 className="lg:font-semibold font-bold text-[12px] lg:text-[16px]">
                    {item.title}
                  </h3>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-4">
                  <div className="flex items-center">
                    <p className="w-1 h-5 badge-secondary mr-2"></p>
                    {subCategory}
                  </div>
                  <div className="flex items-center">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="text-right mt-6">
        <Link href={`/Politics/${subCategory}`}>
          <button className="text-blue-600 hover:underline font-semibold">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default PoliticsSection;