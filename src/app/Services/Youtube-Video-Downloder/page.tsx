// app/YouTube-Video-Downloader/page.tsx
import React from 'react';
import YouTubeDownloader from './_component/YoutubeVideoDownloder';

// ✅ Server component supports metadata
export async function generateMetadata() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.newsus.shop";
  const title = `Free YouTube Video Downloader | Save YouTube Videos & Shorts`;
  const description = `Download YouTube videos and shorts instantly for free. No login required. Save your favorite YouTube content to your device and watch offline anytime.`;
  const image = `${siteUrl}/youtube-video-og.jpg`;

  const keywords = [
    'YouTube video downloader',
    'download YouTube videos',
    'save YouTube shorts',
    'free YouTube downloader',
    'YouTube video saver',
    'online YouTube downloader',
    'download YouTube content',
    'YouTube MP4 downloader',
    'YouTube video converter',
    'save YouTube videos offline',
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
      url: `${siteUrl}/YouTube-Video-Downloader`,
      type: 'website',
      siteName: 'NewsUS',
      images: [
        { url: image, width: 1200, height: 630, alt: 'Free YouTube Video Downloader' },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: `${siteUrl}/YouTube-Video-Downloader`,
    },
  };
}

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Free YouTube Video Downloader
      </h1>
      <p className="text-gray-600 mb-6 text-center md:text-lg">
        Download YouTube videos and shorts instantly for free. No login required. Save your favorite YouTube content to your device and watch offline anytime!
      </p>

      <YouTubeDownloader />
    </div>
  );
};

export default page;
