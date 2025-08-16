import "./globals.css";
import Navber from "./component/Navber";
import Footer from "./component/Footer";
import Script from "next/script"; // Import the Script component

export const metadata = {
  title: "NewsUS: Your Source for Top News Updates",
  description:
    "Stay up-to-date with the latest and most important top news stories. We publish all of the top news, updated daily for your convenience.",
  // Correctly configured for robots.txt and Google Discover
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  // Correctly configured for Google Search Console verification
  verification: {
    google: "UYTNkdzJ3B4ahGpq5dimzr4mkxf1uLefMFjq0KetDkw",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative font-publicsans">
        {/*
          Google Analytics Script:
          The 'beforeInteractive' strategy is ideal for analytics,
          loading the script before the page becomes interactive.
        */}
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

        <div>
          <Navber />
        </div>
        <div className="flex ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}