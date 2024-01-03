'use client'
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image'
import { Res } from "./Redux/slice";
const dark = '/Toggle button.png'
const { useSelector, useDispatch}=require('react-redux')
const Navber = () => {

    const dispatch = useDispatch()
    const responsive = useSelector((state) =>state.shaharia.value);

    return (

        <div>
         <div className="flex fixed w-full justify-between items-center z-50  bg-[#121D45] shadow-sm shadow-buttom   dark:md:bg-[#150A09] px-2 py-2 ">
          <div className="flex justify-center items-center ">
          <GiHamburgerMenu className="text-white text-2xl font-medium mr-2 md:hidden" onClick={()=>dispatch(Res())} />
          <p className="text-[24px] text-white">News</p></div>
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
              
              </div>
            </div>
          </div>
        </div>
        </div>
    
    );
};

export default Navber;