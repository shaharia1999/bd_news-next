'use client'
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image'
import { Res } from "./Redux/slice";
const dark = '/Toggle button.png'
const { useSelector, useDispatch}=require('react-redux')
const Navber = () => {
    const [hide, setHide] = useState(true);
    const dispatch = useDispatch()
    const responsive = useSelector((state) =>state.shaharia.value);
    console.log(responsive);
  
    return (

        <div>
         <div className="flex fixed w-full justify-between items-center z-50  bg-[#F9F9F9] shadow-sm shadow-buttom   dark:md:bg-[#150A09] px-2 py-2 ">
          <div className="flex justify-center items-center ">
          <GiHamburgerMenu className="text-black text-2xl font-medium mr-2 md:hidden" onClick={()=>dispatch(Res())} />
          <p className="text-[24px] text-[#646F75] dark:text-white">Home</p></div>
          <div className="flex justify-center gap-3 ">
            <div className="flex justify-center items-center">
              <img
                alt="Light-mod"
                src={dark}
                className="cursor-pointer"
                // onClick={Tg}
              />
   
            </div>
            <div className="">
              <div className="flex justify-center">
                {/* <img alt="Light-mod" src={avatar} className="cursor-pointer h-14 w-14" /> */}
                <li
                  className={`flex  items-center ${
                    !hide && "justify-center"
                  } gap-4 py-4`}
                >
                  <AiOutlineDown className=" text-3xl font-medium " />
                </li>
              </div>
            </div>
          </div>
        </div>
        </div>
    
    );
};

export default Navber;