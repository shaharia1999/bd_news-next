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
          className={`h-screen sidebar bg-[#FAEDCD] shadow-sm shadow-right  ${responsive?'block':'hidden'} md:block   relative  dark:text-white  ${
            hide ? " w-64 md:w-96  " : "w-20  "
          }`}
        >
          {hide ? (
            <div className="flex px-10  items-center relative pt-10">
              <AiFillSafetyCertificate className="text-[#121D45]  text-4xl font-medium " />
              <p className="text-[24px] ">
                {" "}
                Medi<span className="text-[#6f1d1b]  ">Doc</span>
              </p>
              <AiOutlineArrowLeft
                className="bg-white md:block hidden text-[#6f1d1b]   w-8 h-8 cursor-pointer shadow-lg rounded-full absolute right-[-10px]"
                onClick={() => setHide((prev) => !prev)}
              />
              <AiOutlineArrowLeft
                className="bg-white block md:hidden text-[#6f1d1b]   w-8 h-8 cursor-pointer shadow-lg rounded-full absolute right-[-10px]"
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
                className="text-[#6f1d1b]   text-3xl font-medium cursor-pointer "
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
                <TiHome className="text-[#6f1d1b]  text-3xl font-medium " />
                {hide && <p className="text-16px text-[#6f1d1b]  ">Home</p>}
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
              <p className="text-16px  bg-[#6f1d1b]  w-auto  rounded-md  px-5 py-2 text-white ">
                New appointment
              </p>
            ) : (
              <li
                className={`flex  items-center ${
                  !hide && "justify-center"
                } gap-4 py-4`}
              >
                <div className="h-12 w-12 bg-[#e53a3d] flex items-center justify-center rounded-3xl">
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