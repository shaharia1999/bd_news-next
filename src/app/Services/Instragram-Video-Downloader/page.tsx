// app/Instagram-Video-Downloader/page.tsx
import React from 'react';
import InstagramDownloader from '../Link-Sortener-Qr-Code/_component/Instragram';

// ✅ Server component supports metadata
export async function generateMetadata() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bd-news-next.vercel.app';
  const title = `Free Instagram Video Downloader | Save Instagram Reels & Videos`;
  const description = `Download Instagram videos, reels, and stories instantly for free. No login required. Save Instagram content to your device easily and share anytime.`;
  const image = `${siteUrl}/instagram-video-og.jpg`;

  const keywords = [
    'Instagram video downloader',
    'download Instagram reels',
    'save Instagram videos',
    'free Instagram downloader',
    'Instagram story download',
    'Reels downloader',
    'Instagram media saver',
    'online Instagram downloader',
    'download Instagram content',
    'Instagram video saver',
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
      url: `${siteUrl}/Instagram-Video-Downloader`,
      type: 'website',
      siteName: 'NewsUS',
      images: [
        { url: image, width: 1200, height: 630, alt: 'Free Instagram Video Downloader' },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: `${siteUrl}/Instagram-Video-Downloader`,
    },
  };
}

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Free Instagram Video Downloader
      </h1>
      <p className="text-gray-600 mb-6 text-center md:text-lg">
        Download Instagram videos, reels, and stories instantly for free. No login required. Save your favorite Instagram content and share it anywhere!
      </p>

      <InstagramDownloader />
    </div>
  );
};

export default page;
