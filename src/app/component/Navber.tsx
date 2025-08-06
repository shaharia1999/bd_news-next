"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const subCategoriesMap: { [key: string]: string[] } = {
  Politics: ['International', 'America', 'Europe', 'Asia', 'Africa', 'Australia'],
  Sports: ['Football', 'Cricket', 'Tennis', 'Basketball', 'Olympics', 'Others'],
  Technology: ['AI', 'Gadgets', 'Software', 'Hardware', 'Cybersecurity', 'Others'],
  Entertainment: ['Hollywood', 'Bollywood', 'Others', 'Story'],
  Blog: ['Health', 'Food', 'Finance', 'Travel', 'Story', 'Inspire', 'History', 'Novel', 'Person', 'Others'],
  Poem: ['Romantic', 'Nature', 'Patriotic', 'Spiritual', 'Others'],
  Tranding: ['Viral News', 'Internet Trends', 'Social Media', 'Memes', 'Others'],
};

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#121D45] text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        <p className="text-2xl font-bold">News<span className="text-secondary">Bd</span></p>

        {/* Main nav items */}
        <div className="flex gap-6">
          {Object.entries(subCategoriesMap).map(([category, subCategories]) => (
            <div
              key={category}
              className="relative"
              onMouseEnter={() => setOpenDropdown(category)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="hover:text-secondary font-medium">
                <Link href={`/${category}`} className="flex items-center gap-1">
                  {category}
                </Link>
                {/* {category} */}
                </button>

              {/* Dropdown */}
              {openDropdown === category && (
                <div className="absolute left-0 top-full bg-white text-black min-w-[150px] shadow-lg mt-0 rounded">
                  {subCategories.map((sub) => (
                    <Link
                      key={sub}
                      href={`/${category}/${sub}`}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-3">
          <Image src="/Toggle button.png" width={40} height={40} alt="Toggle Dark" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
