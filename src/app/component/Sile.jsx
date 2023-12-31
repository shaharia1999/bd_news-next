"use client";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TiHome } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { RiProfileFill } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Res } from "./Redux/slice";
import Link from "next/link";
const Sideber = () => {
  const dispatch = useDispatch();
  const responsive = useSelector((state) => state.shaharia.value);
  return (
    <div>
       <div
      className={`  lg:h-screen lg:sticky fixed top-0 left-0 z-50   dark:text-white  h-auto shadow-md lg:block hidden`}
      onMouseEnter={() => dispatch(Res())}
      onMouseLeave={() => dispatch(Res())}
    >
      <div
        className={`h-screen   bg-[#121D45] shadow-sm shadow-right  ${
          responsive ? "block" : "hidden"
        } md:block   relative  text-white  ${
          responsive ? " w-64 2xl:w-72 lg:w-64  " : "w-20  "
        }`}
      >
        {responsive ? (
          <div className="flex px-10  items-center relative pt-20">
            <AiFillSafetyCertificate className="text-secondary  text-4xl font-medium " />
            <p className="text-[24px] font-bold lg:text-3xl text-shadow">
              {" "}
              News<span className=" text-secondary  ">Bd</span>
            </p>
            <AiOutlineArrowLeft
              className="bg-white md:block hidden text-secondary   w-8 h-8 cursor-pointer shadow-lg rounded-full absolute right-[-10px]"
              // onClick={() => setHide((prev) => !prev)}
              onClick={() => dispatch(Res())}
            />
            <AiOutlineArrowLeft
              className="bg-white block md:hidden text-secondary  w-8 h-8 cursor-pointer shadow-lg rounded-full absolute right-[-10px]"
              onClick={() => dispatch(Res())}
            />
          </div>
        ) : (
          <li
            className={`flex  items-center pt-20 ${
              !responsive && "justify-center"
            } gap-4 py-2 pt-10`}
          >
            <GiHamburgerMenu
              className="text-secondary   text-3xl font-medium cursor-pointer "
              // onClick={() => setHide((prev) => !prev)}
              onClick={() => dispatch(Res())}
            />
          </li>
        )}

        <div className={` ${responsive ? "px-10 mt-16" : "px-0 mt-16"}`}>
          <ul>
            <li
              className={`flex  items-center ${
                !responsive && "justify-center"
              } gap-4 py-2`}
            >
              <Link href="/">
                <TiHome className=" text-3xl font-medium " />
              </Link>
              {responsive && (
                <Link href="/">
                  <p className="text-16px ">Home </p>
                </Link>
              )}
            </li>
            <li
              className={`flex  items-center ${
                !responsive && "justify-center"
              } gap-4 py-2`}
            >
              <Link href="/Politics">
                <CgProfile className=" text-3xl font-medium " />
              </Link>
              {responsive && (
                <p className="text-16px">
                  <Link href="/Politics">Politics </Link>
                </p>
              )}
            </li>

            <li
              className={`flex  items-center ${
                !responsive && "justify-center"
              } gap-4 py-2`}
            >
              <Link href="/Sports">
                <RiProfileFill className=" text-3xl font-medium " />
              </Link>
              {responsive && (
                <p className="text-16px">
                  <Link href="/Sports">Sports </Link>
                </p>
              )}
            </li>
            <li
              className={`flex  items-center ${
                !responsive && "justify-center"
              } gap-4 py-2`}
            >
              <Link href="/Magazine">
                {" "}
                <FaHistory className=" text-3xl font-medium " />
              </Link>
              {responsive && (
                <p className="text-16px">
                  <Link href="/Magazine">Magazine</Link>
                </p>
              )}
            </li>
            <li
              className={`flex  items-center ${
                !responsive && "justify-center"
              } gap-4 py-2`}
            >
              <Link href="/Education">
                <IoSettingsSharp className=" text-3xl font-medium " />
              </Link>
              {responsive && (
                <p className="text-16px">
                  <Link href="/Education">Education</Link>
                </p>
              )}
            </li>
            <li
              className={`flex  items-center ${
                !responsive && "justify-center"
              } gap-4 py-2`}
            >
              <Link href="/Blog">
                <IoSettingsSharp className=" text-3xl font-medium " />
              </Link>
              {responsive && (
                <p className="text-16px">
                  <Link href="/Blog">Blog</Link>
                </p>
              )}
            </li>
            <li
              className={`flex  items-center ${
                !responsive && "justify-center"
              } gap-4 py-2`}
            >
              <Link href="/Poem">
                <IoSettingsSharp className=" text-3xl font-medium " />
              </Link>
              {responsive && (
                <p className="text-16px">
                  <Link href="/Poem">Poem</Link>
                </p>
              )}
            </li>
          </ul>
        </div>
        <div className="absolute bottom-3  w-full flex justify-center">
          {responsive ? (
            <p className="text-16px font-semibold   badge-secondary  w-auto  rounded-md  px-10 py-2 text-white ">
              Contact US
            </p>
          ) : (
            <li
              className={`flex  items-center ${
                !responsive && "justify-center"
              } gap-4 `}
            >
              <div className="h-12 w-12 badge-secondary  flex items-center justify-center rounded-3xl">
                <FaPlus className=" text-3xl font-medium w-8 h-8 rounded-full  text-white " />
              </div>
            </li>
          )}
        </div>
      </div>
    </div>
    {/* MObile and Tab */}
    <div
      className={`  lg:h-screen lg:sticky fixed top-0 left-0 z-50   dark:text-white  h-auto shadow-md lg:hidden `}
  
    >
      <div
        className={`h-screen   bg-[#121D45] shadow-sm shadow-right  ${
          responsive ? "block" : "hidden"
        } md:block   relative  text-white  ${
          responsive ? " w-64 2xl:w-72 lg:w-64  " : "w-20  "
        }`}
      >
        {responsive ? (
          <div className="flex px-10  items-center relative pt-20">
            <AiFillSafetyCertificate className="text-secondary  text-4xl font-medium " />
            <p className="text-[24px] font-bold lg:text-3xl text-shadow">
              {" "}
              News<span className=" text-secondary  ">Bd</span>
            </p>
            <AiOutlineArrowLeft
              className="bg-white md:block hidden text-secondary   w-8 h-8 cursor-pointer shadow-lg rounded-full absolute right-[-10px]"
              // onClick={() => setHide((prev) => !prev)}
              onClick={() => dispatch(Res())}
            />
            <AiOutlineArrowLeft
              className="bg-white block md:hidden text-secondary  w-8 h-8 cursor-pointer shadow-lg rounded-full absolute right-[-10px]"
              onClick={() => dispatch(Res())}
            />
          </div>
        ) : (
          <li
            className={`flex  items-center pt-20 ${
              !responsive && "justify-center"
            } gap-4 py-2 pt-10`}
          >
            <GiHamburgerMenu
              className="text-secondary   text-3xl font-medium cursor-pointer "
              // onClick={() => setHide((prev) => !prev)}
              onClick={() => dispatch(Res())}
            />
          </li>
        )}

        <div className={` ${responsive ? "px-10 mt-16" : "px-0 mt-16"}`}>
          <ul>
            <li
              className={`flex  items-center ${
                !responsive && "justify-center"
              } gap-4 py-2`}
              onClick={() => dispatch(Res())}
            >
              <Link href="/">
                <TiHome className=" text-3xl font-medium " />
              </Link>
              {responsive && (
                <Link href="/">
                  <p className="text-16px ">Home </p>
                </Link>
              )}
            </li>
            <li
              className={`flex  items-center ${
                !responsive && "justify-center"
              } gap-4 py-2`}
              onClick={() => dispatch(Res())}
            >
              <Link href="/Politics">
                <CgProfile className=" text-3xl font-medium " />
              </Link>
              {responsive && (
                <p className="text-16px">
                  <Link href="/Politics">Politics </Link>
                </p>
              )}
            </li>

            <li
              className={`flex  items-center ${
                !responsive && "justify-center"
              } gap-4 py-2`}
              onClick={() => dispatch(Res())}
            >
              <Link href="/Sports">
                <RiProfileFill className=" text-3xl font-medium " />
              </Link>
              {responsive && (
                <p className="text-16px">
                  <Link href="/Sports">Sports </Link>
                </p>
              )}
            </li>
            <li
              className={`flex  items-center ${
                !responsive && "justify-center"
              } gap-4 py-2`}
              onClick={() => dispatch(Res())}
            >
              <Link href="/Magazine">
                {" "}
                <FaHistory className=" text-3xl font-medium " />
              </Link>
              {responsive && (
                <p className="text-16px">
                  <Link href="/Magazine">Magazine</Link>
                </p>
              )}
            </li>
            <li
              className={`flex  items-center ${
                !responsive && "justify-center"
              } gap-4 py-2`}
              onClick={() => dispatch(Res())}
            >
              <Link href="/Education">
                <IoSettingsSharp className=" text-3xl font-medium " />
              </Link>
              {responsive && (
                <p className="text-16px">
                  <Link href="/Education">Education</Link>
                </p>
              )}
            </li>
            <li
              className={`flex  items-center ${
                !responsive && "justify-center"
              } gap-4 py-2`}
              onClick={() => dispatch(Res())}
            >
              <Link href="/Blog">
                <IoSettingsSharp className=" text-3xl font-medium " />
              </Link>
              {responsive && (
                <p className="text-16px">
                  <Link href="/Blog">Blog</Link>
                </p>
              )}
            </li>
            <li
              className={`flex  items-center ${
                !responsive && "justify-center"
              } gap-4 py-2`}
              onClick={() => dispatch(Res())}
            >
              <Link href="/Poem">
                <IoSettingsSharp className=" text-3xl font-medium " />
              </Link>
              {responsive && (
                <p className="text-16px">
                  <Link href="/Poem">Poem</Link>
                </p>
              )}
            </li>
          </ul>
        </div>
        <div className="absolute bottom-3  w-full flex justify-center">
          {responsive ? (
            <p  className="text-16px font-semibold   badge-secondary  w-auto  rounded-md  px-10 py-2 text-white ">
              Contact US
            </p>
          ) : (
            <li
              className={`flex  items-center ${
                !responsive && "justify-center"
              } gap-4 `}
              onClick={() => dispatch(Res())}
            >
              <div className="h-12 w-12 badge-secondary  flex items-center justify-center rounded-3xl">
                <FaPlus className=" text-3xl font-medium w-8 h-8 rounded-full  text-white " />
              </div>
            </li>
          )}
        </div>
      </div>
    </div>
      </div>
   
  );
};

export default Sideber;
