const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-300 px-4 py-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p className="text-sm leading-relaxed">
            We are dedicated to delivering the latest news, blogs, and insights on politics, health, technology, and more. Our mission is to provide accurate and trustworthy information to our readers.{' '}
            <a href="/about" className="text-blue-600 hover:underline">Read more</a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Author</h2>
          <p className="text-sm leading-relaxed">
            Written and managed by Md Shaharia,{' '}
            <a
              href="https://www.facebook.com/jahir.shah.783745"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Jahir Shah
            </a>, and Kamrul Islam, passionate writers and front-end developers at Wornar Company. All content is curated with accuracy and responsibility.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <ul className="text-sm leading-relaxed space-y-1">
            <li>Email: <a href="/contact" className="text-blue-600 hover:underline">adeptshaharia@gmail.com</a></li>
            <li>Phone: +8801707018322</li>
            <li>Address: Brahmanbaria, Bangladesh</li>
          </ul>
                      <a href="/contact" className="text-blue-600 hover:underline">Tuch me</a>

        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
          <p className="text-sm leading-relaxed">
            We respect your privacy. Your data is never shared. Cookies are used only to improve user experience and show relevant ads.{' '}
            <a href="/privacy-policy" className="text-blue-600 hover:underline">Read full policy</a>
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} NewsUs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
