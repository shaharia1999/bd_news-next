import "./globals.css";
import Navber from "./component/Navber";
import Footer from "./component/Footer";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NewsUS: Latest Breaking & Trending News Today",
  description:
    "Stay updated with the latest breaking news, trending stories, politics, sports, technology, entertainment, and more. Fresh Google trending news daily on NewsUS.",
  keywords: [
    "breaking news",
    "latest news today",
    "trending news",
    "world news",
    "politics news",
    "sports news",
    "technology news",
    "entertainment news",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://bd-news-next.vercel.app/",
  },
  openGraph: {
    title: "NewsUS: Latest Breaking & Trending News Today",
    description:
      "Daily updates on breaking and trending news across politics, sports, technology, entertainment, and more. Stay informed with NewsUS.",
    url: "https://bd-news-next.vercel.app/",
    siteName: "NewsUS",
    images: [
      {
        url: "https://bd-news-next.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NewsUS - Latest Breaking & Trending News",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NewsUS: Latest Breaking & Trending News Today",
    description:
      "Get the latest trending stories updated daily. Follow NewsUS for breaking news in politics, sports, tech, and entertainment.",
    images: ["https://bd-news-next.vercel.app/og-image.jpg"],
  },
  verification: {
    google: "D_r6_5MOFhQqkLKQwOmMBjBPWL37UhsjrFX7nebGFr0",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
         {/* ✅ Add RSS/Atom Feed link here */}
        <link
          rel="alternate"
          type="application/rss+xml"
          href="https://bd-news-next.vercel.app/rss.xml"
          title="NewsUS RSS Feed"
        />
        {/* Schema.org JSON-LD for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsMediaOrganization",
              name: "NewsUS",
              url: "https://bd-news-next.vercel.app/",
              logo: "https://bd-news-next.vercel.app/logo.png",
              sameAs: [
                "https://www.facebook.com/newsus",
                "https://twitter.com/newsus",
                "https://www.instagram.com/newsus",
              ],
            }),
          }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6058153331113323"
     crossOrigin="anonymous"></script>
      </head>
      <body className="relative font-publicsans bg-gray-50 text-gray-900">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LJ1L2D3PTF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LJ1L2D3PTF');
          `}
        </Script>

        {/* Layout */}
        <Navber />
        <main className="flex flex-col min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
