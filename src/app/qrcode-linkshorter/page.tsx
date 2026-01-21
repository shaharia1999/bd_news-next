// app/qr-generator/page.tsx (Server Component)
import React from 'react'
// import QRSection from './_components/QRCodeShortenerClient'
import Image from 'next/image'
import Link from 'next/link'
import QRCodeShortener from './_component/QRCodeShortener';

export default function QRPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 md:px-10 py-10 max-w-6xl mx-auto">
      
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Free QR Code Generator & URL Shortener
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Instantly generate QR codes and shorten long URLs for marketing, business, social media, or affiliate promotions.
        </p>
      </section>

      {/* QR Tool Section (Client Component) */}
      <section className="bg-white rounded-xl shadow-lg p-6 mb-12">
        <QRCodeShortener/>
      </section>

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
            <Image
              src="/affiliate-qr-demo.png"
              alt="Affiliate QR marketing"
              width={300}
              height={300}
              className="rounded-lg animate-float"
            />
          </div>
        </div>
      </section>

      {/* SEO Article Content */}
      <article className="prose max-w-none">
        <h2>Why Use a QR Code Generator?</h2>
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bd-news-next.vercel.app';
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
      url: `${siteUrl}/qr-generator`,
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
      canonical: `${siteUrl}/qr-generator`,
    },
  };
}
