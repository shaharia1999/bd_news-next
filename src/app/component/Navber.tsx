
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";

const subCategoriesMap: { [key: string]: string[] } = {
  Politics: ['International', 'America', 'Europe', 'Asia', 'Africa', 'Australia'],
  Sports: ['Football', 'Cricket', 'Tennis', 'Basketball', 'Olympics', 'Others'],
  Technology: ['AI', 'Gadgets', 'Software', 'Hardware', 'Cybersecurity', 'Others'],
  Entertainment: ['Hollywood', 'Bollywood', 'Others', 'Story'],
  Blog: ['Health', 'Food', 'Finance', 'Travel', 'Story', 'Inspire', 'History', 'Novel', 'Person', 'Others'],
  Poem: ['Romantic', 'Nature', 'Patriotic', 'Spiritual', 'Others'],
  Tranding: ['Viral', 'Internet', 'Social', 'Memes', 'Others'],
};

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#121D45] text-white shadow-md">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Mobile: Menu left, logo right */}
          <div className="md:hidden flex items-center justify-between w-full">
            <button
              className="text-white text-3xl"
              onClick={() => setMobileMenuOpen(true)}
            >
              <HiOutlineMenu />
            </button>
            <Link href='/' className="text-2xl font-bold">
              News<span className="text-red-500">Us</span>
            </Link>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex justify-between items-center w-full">
            <Link href='/' className="text-2xl font-bold">News<span className="text-red-500">Us</span>
            </Link>

            <div className="flex gap-6">
              {Object.entries(subCategoriesMap).map(([category, subCategories]) => (
                <div
                  key={category}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(category)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={`/${category}`}
                    className="hover:text-red-500 font-medium flex items-center gap-1"
                  >
                    {category}
                  </Link>

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
                        <p className="text-2xl font-bold"><span className="text-red-500"></span></p>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] bg-white z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <Link href='/' className="text-xl font-bold text-black">
          News<span className="text-red-500">Us</span></Link>
          <button onClick={() => setMobileMenuOpen(false)} className="text-3xl text-gray-600">
            <HiX />
          </button>
        </div>
        <div className="p-4 overflow-y-auto">
          {Object.entries(subCategoriesMap).map(([category, subCategories]) => (
            <div key={category} className="mb-4">
              <details className="group">
                <summary className="cursor-pointer font-semibold text-gray-800 flex items-center justify-between py-2">
                  <Link
                    href={`/${category}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-blue-600"
                  >
                    {category}
                  </Link>
                  <FaChevronDown className="text-sm ml-2 text-gray-600 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 mt-2 space-y-1">
                  {subCategories.map((sub) => (
                    <Link
                      key={sub}
                      href={`/${category}/${sub}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-gray-600 hover:text-blue-600"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Spacer */}
      <div className="h-[70px] md:h-[90px]" />
    </>
  );
};

export default Navbar;

