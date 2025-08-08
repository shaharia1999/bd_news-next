const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-300 px-4 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p className="text-sm leading-relaxed">
            We are dedicated to delivering the latest news, blogs, and insights on politics, health, technology, and more. Our mission is to provide accurate and trustworthy information to our readers.
          </p>
        </div>

        {/* Author */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Author</h2>
          <p className="text-sm leading-relaxed">
            Written and managed by Md Shaharia, a passionate writer and front-end developer at Wornar Company. All content is curated with accuracy and responsibility.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <ul className="text-sm leading-relaxed space-y-1">
            <li>Email: adeptshaharia@gmail.com</li>
            <li>Phone: +8801707018322</li>
            <li>Address: Brahmanbaria, Bangladesh</li>
          </ul>
        </div>

        {/* Privacy Policy */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
          <p className="text-sm leading-relaxed">
            We respect your privacy. Your data is never shared. Cookies are used only to improve user experience and show relevant ads.
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} NewsUs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
