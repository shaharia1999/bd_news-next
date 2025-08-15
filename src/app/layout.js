import "./globals.css";
import Navber from "./component/Navber";
import Footer from "./component/Footer";

export const metadata = {
  title: "NewsUS: Your Source for Top News Updates",
  description:
    "Stay up-to-date with the latest and most important top news stories. We publish all of the top news, updated daily for your convenience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LJ1L2D3PTF"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LJ1L2D3PTF');
            `,
          }}
        />
        {/* SEO Meta Tags */}
        <meta
          name="google-site-verification"
          content="UYTNkdzJ3B4ahGpq5dimzr4mkxf1uLefMFjq0KetDkw"
        />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="relative font-publicsans">
        <div>
          <Navber />
        </div>
        <div className="flex ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
