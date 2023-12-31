'use client'
// import '../app/globals.css'
import { AiFillSafetyCertificate } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TiHome } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { RiProfileFill } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCaretUp } from "react-icons/ai";
import { FaCheckSquare } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { useState } from "react";

const Sideber = () => {
      const [hide, setHide] = useState(true);
  const [darks, setDarks] = useState(false);
  const [responsive, setResponsive] = useState(false);
  const Tg = () => {
    // let btn = document.documentElement.classList.toggle("dark");
    console.log(btn);
    setDarks((pre) => !pre);
  };

    return (
        <div className={`fixed bg-black  lg:h-screen lg:sticky top-0 left-0 z-50   dark:text-white  h-auto shadow-md`}>
        <div
          className={`h-screen bg-yellow-500 ${responsive?'block':'hidden'} md:block   relative  dark:text-white  ${
            hide ? " w-64 md:w-96  " : "w-20  "
          }`}
        >
          {hide ? (
            <div className="flex px-10  items-center relative pt-10">
              <AiFillSafetyCertificate className="text-[#E91802] dark:text-[#FF7594] text-4xl font-medium " />
              <p className="text-[24px] ">
                {" "}
                Medi<span className="text-[#E91802] dark:text-[#FF7594] ">Doc</span>
              </p>
              <AiOutlineArrowLeft
                className="bg-white md:block hidden text-[#E91802] dark:text-[#FF7594]  w-8 h-8 cursor-pointer shadow-lg rounded-full absolute right-[-10px]"
                onClick={() => setHide((prev) => !prev)}
              />
              <AiOutlineArrowLeft
                className="bg-white block md:hidden text-[#E91802] dark:text-[#FF7594]  w-8 h-8 cursor-pointer shadow-lg rounded-full absolute right-[-10px]"
                onClick={() => setResponsive((prev) => !prev)}
              />
            </div>
          ) : (
            <li
              className={`flex  items-center ${
                !hide && "justify-center"
              } gap-4 py-4 pt-10`}
            >
              <GiHamburgerMenu
                className="text-[#E91802] dark:text-[#FF7594]  text-3xl font-medium cursor-pointer "
                onClick={() => setHide((prev) => !prev)}
              />
            </li>
          )}

          <div className={` ${hide ? "px-10 mt-16" : "px-0 mt-16"}`}>
            <ul>
              <li
                className={`flex  items-center ${
                  !hide && "justify-center"
                } gap-4 py-4`}
              >
                <TiHome className="text-[#E91802] dark:text-[#FF7594]  text-3xl font-medium " />
                {hide && <p className="text-16px text-[#E91802] dark:text-[#FF7594] ">Home</p>}
              </li>
              <li
                className={`flex  items-center ${
                  !hide && "justify-center"
                } gap-4 py-4`}
              >
                <CgProfile className=" text-3xl font-medium " />
                {hide && <p className="text-16px">Patient Profile </p>}
              </li>

              <li
                className={`flex  items-center ${
                  !hide && "justify-center"
                } gap-4 py-4`}
              >
                <RiProfileFill className=" text-3xl font-medium " />
                {hide && <p className="text-16px ">Appointments</p>}
              </li>
              <li
                className={`flex  items-center ${
                  !hide && "justify-center"
                } gap-4 py-4`}
              >
                <FaHistory className=" text-3xl font-medium " />

                {hide && <p className="text-16px">Medical History</p>}
              </li>
              <li
                className={`flex  items-center ${
                  !hide && "justify-center"
                } gap-4 py-4`}
              >
                <IoSettingsSharp className=" text-3xl font-medium " />
                {hide && <p className="text-16px ">Settings</p>}
              </li>
            </ul>
          </div>
          <div className="absolute bottom-3  w-full flex justify-center">
            {hide ? (
              <p className="text-16px  dark:bg-[#FF797B] bg-[#E91802]  w-auto  rounded-md  px-5 py-2 text-white ">
                New appointment
              </p>
            ) : (
              <li
                className={`flex  items-center ${
                  !hide && "justify-center"
                } gap-4 py-4`}
              >
                <div className="h-12 w-12 bg-[#e53a3d] flex items-center justify-center rounded-3xl">
                  <FaPlus className=" text-3xl font-medium w-8 h-8 rounded-full bg-[#FF797B] text-white " />
                </div>
              </li>
            )}
          </div>
        </div>
      </div>
    );
};

export default Sideber;