// app/qr-generator/page.tsx (Server Component)
import React from 'react'
// import QRSection from './_components/QRCodeShortenerClient'
import Image from 'next/image'
import Link from 'next/link'
import QRCodeShortener from './_component/QRCodeShortener';
import { serverFetchData } from '../../lib/serverFetch';
import AffiliatePopup from '../../component/AfilitateCart';
// import { serverFetchData } from '../lib/serverFetch';
// import AffiliatePopup from '../component/AfilitateCart';


interface News {
  _id: string;
  title: string;
  description: string;
  slug: string;
  mainImage: string;
  category: string;
  createdAt: string;
  images?: string[];
  visitCount?: number | string;
  author?: string;
  source?: string;

  // Affiliate fields
  affiliateLink?: string;
  affiliateimage?: string;
  affiliateprice?: string;
  affiliateoriginalprice?: string;
  affiliateDiscount?: string;
  affiliateRating?: string;
}

interface NewsApiResponse {
  total: number;
  page: number;
  pages: number;
  news: News[];
}
export default async function QRPage() {
  const { news } = await serverFetchData<NewsApiResponse>(
    'news?sortBy=createdAt&sortOrder=desc&limit=10&page=1',
    {
      cache: 'default',
      next: { revalidate: 60 }
    }
  );
  // console.log('Breaking news data:', news);
  if (!news || news.length === 0) return null;

  const affiliateNews = news?.filter(
    (item) => item.affiliateLink
  );
  // positions array with correct type
  const positions: Array<"top-right" | "top-left" | "bottom-right" | "bottom-left" | "center"> = [
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
    "center",
  ];
  return (
    <main className="min-h-screen bg-gray-50 px-4 md:px-10 py-2 max-w-6xl mx-auto">

      {/* Hero Section */}
      <div className='relative'>

        <section className="text-center mb-12 ">

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Free QR Code Generator & URL Shortener
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Instantly generate QR codes and shorten long URLs for marketing, business, social media, or affiliate promotions.
          </p>
        </section>

        {/* QR Tool Section (Client Component) */}
        <section className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <QRCodeShortener />
        </section>

        {affiliateNews.length > 0 && (
          <section className="mt-10">

            {affiliateNews.length > 0 && (
              <section className="mt-10 relative">


                {/* Floating Popups */}
                {/* {affiliateNews.slice(0, 4).map((item, index) => (
                  <AffiliatePopup
                    key={item._id}
                    link={item.affiliateLink}
                    image={item.affiliateimage}
                    title={item.affiliateDiscount || item.title}
                    price={item.affiliateprice}
                    originalPrice={item.affiliateoriginalprice}
                    rating={item.affiliateRating}
                    width='w-72'
                    ZIndex='z-50'
                    wrapperClass={
                      index % 5 === 0
                        ? "fixed top-5 left-5"
                        : index % 5 === 1
                          ? "fixed top-5 right-5"
                          : index % 5 === 2
                            ? "fixed bottom-5 left-5"
                            : index % 5 === 3
                              ? "fixed bottom-5 right-5"
                              : "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    }

                    animation="zoom"
                    imageSize="lg"
                    maxTitleLength={45}
                    ctaText="Buy Now"
                  />
                ))} */}
              </section>
            )}

          </section>
        )}

      </div>
      {/* Affiliate Highlight Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl p-6 mb-12 relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Promote Products Using QR Codes
            </h2>
            <p className="text-indigo-100 text-sm mb-4">
              Convert any affiliate link into a QR code and share it on posters, packaging, websites, or social media to boost conversions.
              Generate your QR code instantly and track clicks easily.
            </p>
            <Link
              href="https://s.click.aliexpress.com/e/_c34m3ZIJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-indigo-700 px-5 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              View Best Deals →
            </Link>
          </div>

          {/* Image */}
          <div className="relative flex justify-center">
            {affiliateNews.slice(0, 1).map((item, index) => (
              <div key={item._id} className="relative w-full">
                <AffiliatePopup
                  link={item.affiliateLink!}
                  image={item.affiliateimage!}
                  title={item.affiliateDiscount}
                  price={item.affiliateprice}
                  originalPrice={item.affiliateoriginalprice}
                  rating={item.affiliateRating}
                  wrapperClass="relative w-full" // mobile responsive
                  animation="zoom"
                  imageSize="lg"
                  maxTitleLength={45}
                  ctaText="Buy Now"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Article Content */}
      <article className="prose max-w-none">
        <h2 className='font-bold text-2xl'>Why Use a QR Code Generator?</h2>
        <p>
          QR codes allow users to instantly access websites, product pages, payment links, or download files without typing long URLs.
          This is especially useful for affiliate marketing, social media campaigns, and business promotions.
        </p>

        <h2>Best Uses of QR Codes</h2>
        <ul>
          <li>Affiliate marketing & product promotion</li>
          <li>Business cards and flyers</li>
          <li>Restaurant menus</li>
          <li>Event tickets and check-ins</li>
          <li>Social media links and YouTube URLs</li>
        </ul>

        <h2>Short Links for Better Tracking</h2>
        <p>
          Shortened links look clean, are easier to share, and improve click tracking for affiliate campaigns and marketing analytics.
          Combine short links with QR codes for maximum impact.
        </p>

        <h2>Free & Secure</h2>
        <p>
          Our QR code generator and URL shortener are completely free to use. We do not store personal data or track private user information.
        </p>
      </article>
    </main>
  )
}

// ✅ Server component supports metadata
export async function generateMetadata() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.newsus.shop";
  const title = `Free QR Code Generator & URL Shortener | Create Affiliate QR Links`;
  const description = `Generate free QR codes and shorten long URLs instantly. Perfect for affiliate marketing, social media, business promotions, and product campaigns. Create your affiliate QR link today.`;
  const image = `${siteUrl}/qr-shortener-og.jpg`;

  const keywords = [
    'QR code generator',
    'URL shortener',
    'affiliate QR code',
    'short link generator',
    'free QR code',
    'marketing QR codes',
    'QR code for products',
    'shorten affiliate links',
    'digital marketing tools',
    'QR code creator',
    'short URL',
  ].join(', ');

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords,
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/Services/Link-Sortener-Qr-Code`,
      type: 'website',
      siteName: 'NewsUS',
      images: [
        { url: image, width: 1200, height: 630, alt: 'Free QR Code Generator & URL Shortener' },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: `${siteUrl}/Services/Link-Sortener-Qr-Code`,
    },
  };
}
