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
import { useDispatch, useSelector } from "react-redux";
import { Res } from "./Redux/slice";

const Sideber = () => {
  const dispatch = useDispatch()
  const [hide, setHide] = useState(true);
  const responsive = useSelector((state) =>state.shaharia.value);


    return (
        <div className={`  lg:h-screen lg:sticky top-0 left-0 z-50   dark:text-white  h-auto shadow-md`}>
        <div
          className={`h-screen sidebar bg-[#121D45] shadow-sm shadow-right  ${responsive?'block':'hidden'} md:block   relative  text-white  ${
            hide ? " w-64 md:w-72  " : "w-20  "
          }`}
        >
          {hide ? (
            <div className="flex px-10  items-center relative pt-10">
              <AiFillSafetyCertificate className="text-secondary  text-4xl font-medium " />
              <p className="text-[24px] font-bold lg:text-3xl text-shadow">
                {" "}
                News<span className=" text-secondary  ">Bd</span>
              </p>
              <AiOutlineArrowLeft
                className="bg-white md:block hidden text-secondary   w-8 h-8 cursor-pointer shadow-lg rounded-full absolute right-[-10px]"
                onClick={() => setHide((prev) => !prev)}
              />
              <AiOutlineArrowLeft
                className="bg-white block md:hidden text-secondary  w-8 h-8 cursor-pointer shadow-lg rounded-full absolute right-[-10px]"
               onClick={()=>dispatch(Res())}
              />
            </div>
          ) : (
            <li
              className={`flex  items-center ${
                !hide && "justify-center"
              } gap-4 py-4 pt-10`}
            >
              <GiHamburgerMenu
                className="text-secondary   text-3xl font-medium cursor-pointer "
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
                <TiHome className=" text-3xl font-medium " />
                {hide && <p className="text-16px  ">Home</p>}
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
              <p className="text-16px font-semibold   badge-secondary  w-auto  rounded-md  px-10 py-2 text-white ">
                Contact US
              </p>
            ) : (
              <li
                className={`flex  items-center ${
                  !hide && "justify-center"
                } gap-4 py-4`}
              >
                <div className="h-12 w-12 badge-secondary  flex items-center justify-center rounded-3xl">
                  <FaPlus className=" text-3xl font-medium w-8 h-8 rounded-full  text-white " />
                </div>
              </li>
            )}
          </div>
        </div>
      </div>
    );
};

export default Sideber;