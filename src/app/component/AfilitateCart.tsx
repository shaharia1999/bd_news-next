'use client';
import Image from "next/image";
import Link from "next/link";

type AffiliatePopupProps = {
  link: string;
  image: string;
  title?: string;
  price?: string;
  originalPrice?: string;
  discount?: string;
  rating?: string;

  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"|"center";
  width?: string; // e.g. "w-64", "w-72"
  bg?: string; // e.g. "bg-gray-900"
  textColor?: string;
  animation?: "fade" | "slide" | "zoom";
};

const getCleanUrl = (url: string) => {
  const match = url?.match(/https?:\/\/.*/);
  return match ? match[0] : "#";
};

export default function AffiliatePopup({
  link,
  image,
  title,
  price,
  originalPrice,
  discount,
  rating,
  position = "top-right",
  width = "w-64",
  bg = "bg-gray-900",
  textColor = "text-white",
  animation = "fade",
}: AffiliatePopupProps) {
  // const posMap = {
  //   "top-right": "top-5 right-5",
  //   "top-left": "top-5 left-5",
  //   "bottom-right": "bottom-5 right-5",
  //   "bottom-left": "bottom-5 left-5",
  // };
  const posMap = {
  "top-right": "top-5 right-5",
  "top-left": "top-5 left-5",
  "bottom-right": "bottom-5 right-5",
  "bottom-left": "bottom-5 left-5",
  "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

  const animMap = {
    fade: "animate-fadeIn",
    slide: "animate-slideIn",
    zoom: "animate-zoomIn",
  };

  const id = `affiliate-${Math.random().toString(36).slice(2)}`;

  return (
    <>
      {/* Toggle */}
      <input id={id} type="checkbox" className="peer hidden" />

      {/* Popup */}
      <div
        className={`
          absolute ${posMap[position]} ${width} ${bg} ${textColor}
          p-3 rounded-lg shadow-xl z-50
          peer-checked:hidden
          ${animMap[animation]}
        `}
      >
        {/* Close button */}
        <label
          htmlFor={id}
          className="absolute top-2 right-2 cursor-pointer text-gray-400 hover:text-white"
        >
          ✕
        </label>

        <div className="flex gap-3">
          <Link href={getCleanUrl(link)} target="_blank">
            <Image
              src={image}
              alt={title}
              width={80}
              height={80}
              className="rounded object-cover"
            />
          </Link>

          <div className="text-sm">
            <Link
              href={getCleanUrl(link)}
              target="_blank"
              className="font-bold hover:underline block"
            >
              {title}
            </Link>

            {price && (
              <p className="mt-1">
                {originalPrice && (
                  <span className="line-through text-gray-400 mr-1">
                    {originalPrice}
                  </span>
                )}
                <span className="text-green-400">{price}</span>
                {discount && ` (${discount})`}
              </p>
            )}

            {rating && <p className="mt-1">⭐ {rating}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
