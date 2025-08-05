// components/BreakingNewsSkeleton.tsx
export default function BreakingNewsSkeleton() {
  return (
    <div className="md:pl-[85px] md:pr-[10px] 2xl:mt-24 lg:mt-20 mt-16 w-full lg:px-7 md:py-10 animate-pulse">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
        {/* Left Skeleton */}
        <div className="lg:col-span-8">
          <div className="w-full aspect-[16/9] bg-gray-300 rounded-md" />
          <div className="h-6 mt-4 bg-gray-300 w-3/4 rounded" />
          <div className="h-4 mt-2 bg-gray-300 w-1/2 rounded" />

          {/* Marquee skeleton */}
          <div className="flex gap-4 mt-6 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="min-w-[300px] h-[200px] bg-gray-300 rounded-md"
              />
            ))}
          </div>
        </div>

        {/* Sidebar Skeleton */}
        <div className="lg:col-span-4 mt-2 lg:mt-0 px-2 md:px-0">
          <div className="grid grid-cols-2 grid-rows-2 2xl:gap-5 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-300 rounded-md h-[200px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
