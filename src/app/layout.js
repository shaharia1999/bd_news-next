import "./globals.css";
import Navber from "./component/Navber";
import Footer from "./component/Footer";

// I've updated the metadata to be more descriptive based on your request.
// This will help with Search Engine Optimization (SEO).
export const metadata = {
  title: "NewsUS: Your Source for Top News Updates",
  description: "Stay up-to-date with the latest and most important top news stories. We publish all of the top news, updated daily for your convenience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Keeping the Google site verification and robots meta tags as they are important for SEO */}
      <meta name="google-site-verification" content="UYTNkdzJ3B4ahGpq5dimzr4mkxf1uLefMFjq0KetDkw" />
      <meta name="robots" content="index, follow"></meta>
      <body className="relative font-publicsans">
        <div>
          <Navber></Navber>
        </div>
        <div className="flex ">
          {/* <Sideber className=''></Sideber> */}
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
