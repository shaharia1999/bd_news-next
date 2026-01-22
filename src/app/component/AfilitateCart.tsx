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
  ZIndex?: string;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "center";
  width?: string;
  bg?: string;
  textColor?: string;
  animation?: "fade" | "slide" | "zoom";

  imageSize?: "sm" | "md" | "lg";
  maxTitleLength?: number;
  ctaText?: string;
  wrapperClass?: string; // optional custom wrapper class
};

const getCleanUrl = (url: string) => {
  const match = url?.match(/https?:\/\/.*/);
  return match ? match[0] : "#";
};

const trimText = (text = "", max = 60) =>
  text.length > max ? text.slice(0, max) + "…" : text;

export default function AffiliatePopup({
  link,
  image,
  title,
  price,
  originalPrice,
  discount,
  rating,
  position = "bottom-right",
  width,
  bg = "bg-gray-900",
  textColor = "text-white",
  animation = "fade",
  wrapperClass,
 ZIndex="z-10",
  imageSize = "md",
  maxTitleLength = 60,
  ctaText = "View Deal",
}: AffiliatePopupProps) {
  const posMap = {
    "top-right": "fixed sm:top-5 sm:right-5 top-auto right-4 bottom-4",
    "top-left": "fixed sm:top-5 sm:left-5 top-auto left-4 bottom-4",
    "bottom-right": "fixed sm:bottom-5 sm:right-5 top-auto right-4 bottom-20",
    "bottom-left": "fixed sm:bottom-5 sm:left-5 top-auto left-4 bottom-20",
    "center": "fixed sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 top-20 left-1/2 -translate-x-1/2",
  };

  const animMap = {
    fade: "animate-fadeIn",
    slide: "animate-slideIn",
    zoom: "animate-zoomIn",
  };

  const imageMap = {
    sm: 64,
    md: 96,
    lg: 128,
  };

  const id = `affiliate-${Math.random().toString(36).slice(2)}`;

  return (
    <>
      <input id={id} type="checkbox" className="peer hidden" />

      <div
        className={`
          ${wrapperClass || posMap[position]} 
          ${width}  ${bg} ${textColor}
          p-4 rounded-xl shadow-2xl ${ZIndex}
          peer-checked:hidden
          ${animMap[animation]}
          sm:text-sm text-xs
        `}
      >
        {/* Close */}
        <label
          htmlFor={id}
          className="absolute top-2 right-2 cursor-pointer text-gray-400 hover:text-white"
        >
          ✕
        </label>

        {/* Card */}
        <div className="flex gap-3 sm:gap-4 items-start">
          {/* Image */}
          <Link href={getCleanUrl(link)} target="_blank">
            <Image
              src={image}
              alt={title || "affiliate product"}
              width={imageMap[imageSize]}
              height={imageMap[imageSize]}
              className="rounded-lg object-cover border border-white/10"
            />
          </Link>

          {/* Content */}
          <div className="flex-1">
            <Link
              href={getCleanUrl(link)}
              target="_blank"
              className="font-semibold leading-snug hover:underline block sm:text-sm text-xs"
              title={title}
            >
              {trimText(title, maxTitleLength)}
            </Link>

            {/* Price */}
            {price && (
              <div className="mt-1 flex items-center gap-1 sm:gap-2">
                {originalPrice && (
                  <span className="line-through text-gray-400 text-xs sm:text-sm">
                    {originalPrice}
                  </span>
                )}
                <span className="text-green-400 font-bold sm:text-sm text-xs">{price}</span>
                {discount && (
                  <span className="bg-green-600/20 text-green-400 px-2 py-0.5 rounded text-xs sm:text-sm">
                    {discount}
                  </span>
                )}
              </div>
            )}

            {/* Rating */}
            {rating && (
              <p className="mt-1 text-yellow-400 text-xs sm:text-sm">
                ⭐ {rating} / 5
              </p>
            )}

            {/* CTA */}
            <Link
              href={getCleanUrl(link)}
              target="_blank"
              className="inline-block mt-3 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-md transition"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
