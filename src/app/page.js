'use client'
import { AiFillCaretUp } from 'react-icons/ai';
import { FaCheckSquare } from 'react-icons/fa';
const Banner='./japan.jpg'
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {
  const respons = useSelector((state) =>state.shaharia);
  
  return (
 <div className=" w-full">
     <div className="md:pl-28 lg:mt-28 dark:bg-[#150A09]  w-full lg:pl-10 pl-0 md:pr-7 md:pt-0 md:py-10  "> 
     
        {/* Content Div */}
        <div className={` lg:gap-x-8 lg:grid lg:grid-cols-12 '}`} >
          <div className="lg:col-span-8 ">
            <article className="bg-gradient-to-r   text-white relative ">
                 <div className="m-0 p-0 w-full braking_img relative after:bg-slate-800">
                  <img className=" h-[400px] w-[100%]"  alt="doctor" src={Banner}/>
                  </div>
                 <div className="flex px-5 pb-3 absolute bottom-0 left-0 justify-center items-center  flex-col w-full ">
                <a href='#' className="text-5xl text-shadow-md font-bold hover:text-green-400">Powerful quake in Japan tears down homes and triggers tsunami warnings</a>
                <p className="mt-2">magnitude earthquake in Japan has caused homes to collapse, ripped up roads and triggered tsunami warnings for coastal areas</p> 
                {/* <p>You Have No pending Reports</p>  */}
                  
                  
                 </div>
            </article>
            <div className="grid md:grid-cols-4 grid-cols-2 py-10 gap-4">
            <article className="shadow-md rounded-md px-5 py-2 dark:bg-[#2B2121]">
              <div>
                {/* <img  alt='love' src={love} /> */}
              </div>
              <p className="font-medium">Pulse Count</p>
              <p className="font-medium">60 bpm</p>
              
              <div className="flex items-center ">
              <AiFillCaretUp className="text-black dark:text-white mr-2"/>
              <p className="text-green-500">Normal</p>
                </div>
            </article>
            <article className="shadow-md rounded-md px-5 py-2 dark:bg-[#2B2121]">
              <div>
                {/* <img  alt='love' src={love1} /> */}
              </div>
              <p className="font-medium">Pulse Count</p>
              <p className="font-medium">60 bpm</p>
              
              <div className="flex items-center ">
              <AiFillCaretUp className="text-black dark:text-white mr-2"/>
                
                <p className="text-[#82AB0D]">Slightly higher</p>
                </div>
            </article>
            <article className="shadow-md rounded-md px-5 py-2 dark:bg-[#2B2121]">
              <div>
                {/* <img  alt='love' src={love2} /> */}
              </div>
              <p className="font-medium">Pulse Count</p>
              <p className="font-medium">60 bpm</p>
              
              <div className="flex items-center ">
              <AiFillCaretUp className="text-black dark:text-white mr-2"/>
                
                <p className="text-[#82AB0D]">Slightly higher</p>
                </div>
            </article>
            <article className="shadow-md rounded-md px-5 py-2 dark:bg-[#2B2121]">
              <div>
                {/* <img  alt='love' src={love3} /> */}
              </div>
              <p className="font-medium">Pulse Count</p>
              <p className="font-medium">60 bpm</p>
              
              <div className="flex items-center ">
              <AiFillCaretUp className="text-black dark:text-white mr-2"/>
                
                <p className="text-green-500">Normal</p>
                </div>
            </article>
          
            </div>

            {/* Todo List  */}
            <div className="md:flex md:gap-x-3">
            <div className="bg-white dark:bg-[#2c2121] px-5 py-3 md:w-1/2 lg:w-full">
              <h3 className="pb-4 text-2xl">To-Do List</h3>
              <article className="flex justify-between gap-x-2">
                <textarea className="w-10/12"></textarea>
                <div className="">
                <button className=" bg-[#D4A373]  w-28 py-1 font-medium text-white rounded-md">Add</button>
                </div>
                
              </article>
              <article className="flex justify-between gap-x-2 mt-8">
                
                 <div className="flex justify-center items-center"><FaCheckSquare className="text-[#EDEBEB] text-3xl mr-3" />
                 <p>Select All</p></div>
                 <div><button className=" bg-[#D4A373]  w-28 py-1 font-medium text-white rounded-md">Done</button></div>
              </article>
              <article className="mt-10">
                <ul>
                  <li className="flex justify-between items-center py-1">
                    <div className="flex justify-center items-center">
                    <FaCheckSquare className="  text-[#D4A373]  text-3xl mr-3" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                 
                  <p className="text-[#E0E0E0]">Last Added: 10 sep 2022 </p>
                  </li>
                  <li className="flex justify-between items-center py-1">
                    <div className="flex justify-center items-center">
                    <FaCheckSquare className="text-[#E0E0E0] text-3xl mr-3" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                 
                  <p className="text-[#E0E0E0]">Last Added: 10 sep 2022 </p>
                  </li>
                  <li className="flex justify-between items-center py-1">
                    <div className="flex justify-center items-center">
                    <FaCheckSquare className="text-[#E0E0E0] text-3xl mr-3" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                 
                  <p className="text-[#E0E0E0]">Last Added: 10 sep 2022 </p>
                  </li>
                  <li className="flex justify-between items-center py-1">
                    <div className="flex justify-center items-center">
                    <FaCheckSquare className="text-[#E0E0E0] text-3xl mr-3" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                 
                  <p className="text-[#E0E0E0]">Last Added: 10 sep 2022 </p>
                  </li>
                
                </ul>
              </article>

              </div>
              <article className="lg:hidden md:block hidden ">
            <div className="bg-white dark:bg-[#2c2121] px-5 py-3">
              <h3 className="pb-4 text-2xl">Upcoming-Events</h3>
           
              <article className="mt-5">
                <ul>
                  <li className="flex justify-between items-center dark:bg-[#6a5050]  bg-[##D4A373] rounded-lg border mt-5">
                    <div className="flex justify-center items-center">
                    <div className="bg-white dark:bg-[#2c2121] px-3 py-2 rounded-md">
                      <p>2022</p>
                      <p>23</p>
                      <p>Sep</p>
                    </div>
                    <div className="px-2 py-1">
                    <p className="font-medium">Dr. Muhammad Abdul Hussein </p>
                    <p>Cardiologist </p>
                    <div className="flex gap-2 oy-4">
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md"> Start Morning</button>
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md">Time 10:00 AM</button>
                    </div>
                    </div>
                  
                    </div>
                
                  </li>
                  <li className="flex justify-between items-center dark:bg-[#6a5050]  bg-[##D4A373] rounded-lg border mt-5">
                    <div className="flex justify-center items-center">
                    <div className="bg-white dark:bg-[#2c2121] px-3 py-2 rounded-md">
                      <p>2022</p>
                      <p>23</p>
                      <p>Sep</p>
                    </div>
                    <div className="px-2 py-1">
                    <p className="font-medium">Dr. Muhammad Abdul Hussein </p>
                    <p>Cardiologist </p>
                    <div className="flex gap-2 oy-4">
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md"> Start Morning</button>
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md">Time 10:00 AM</button>
                    </div>
                    </div>
                  
                    </div>
                
                  </li>
                  <li className="flex justify-between items-center dark:bg-[#6a5050]  bg-[##D4A373] rounded-lg border mt-5">
                    <div className="flex justify-center items-center">
                    <div className="bg-white dark:bg-[#2c2121] px-3 py-2 rounded-md">
                      <p>2022</p>
                      <p>23</p>
                      <p>Sep</p>
                    </div>
                    <div className="px-2 py-1">
                    <p className="font-medium">Dr. Muhammad Abdul Hussein </p>
                    <p>Cardiologist </p>
                    <div className="flex gap-2 oy-4">
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md"> Start Morning</button>
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md">Time 10:00 AM</button>
                    </div>
                    </div>
                  
                    </div>
                
                  </li>
                  <li className="flex justify-between items-center dark:bg-[#6a5050]  bg-[##D4A373] rounded-lg border mt-5">
                    <div className="flex justify-center items-center">
                    <div className="bg-white dark:bg-[#2c2121] px-3 py-2 rounded-md">
                      <p>2022</p>
                      <p>23</p>
                      <p>Sep</p>
                    </div>
                    <div className="px-2 py-1">
                    <p className="font-medium">Dr. Muhammad Abdul Hussein </p>
                    <p>Cardiologist </p>
                    <div className="flex gap-2 oy-4">
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md"> Start Morning</button>
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md">Time 10:00 AM</button>
                    </div>
                    </div>
                  
                    </div>
                
                  </li>
              
                 
                </ul>
              </article>

            </div>
            </article>
            </div>
          
  
          </div>

          
           <div className="lg:col-span-4 ">
            <article className="md:hidden lg:block">
            <div className="bg-white dark:bg-[#2c2121] px-5 py-3">
              <h3 className="pb-4 text-2xl">Upcoming-Events</h3>
           
              <article className="mt-5">
                <ul>
                  <li className="flex justify-between items-center dark:bg-[#6a5050]  bg-[##D4A373] rounded-lg border mt-5">
                    <div className="flex justify-center items-center">
                    <div className="bg-white dark:bg-[#2c2121] px-3 py-2 rounded-md">
                      <p>2022</p>
                      <p>23</p>
                      <p>Sep</p>
                    </div>
                    <div className="px-2 py-1">
                    <p className="font-medium">Dr. Muhammad Abdul Hussein </p>
                    <p>Cardiologist </p>
                    <div className="flex gap-2 oy-4">
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md"> Start Morning</button>
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md">Time 10:00 AM</button>
                    </div>
                    </div>
                  
                    </div>
                
                  </li>
                  <li className="flex justify-between items-center dark:bg-[#6a5050]  bg-[##D4A373] rounded-lg border mt-5">
                    <div className="flex justify-center items-center">
                    <div className="bg-white dark:bg-[#2c2121] px-3 py-2 rounded-md">
                      <p>2022</p>
                      <p>23</p>
                      <p>Sep</p>
                    </div>
                    <div className="px-2 py-1">
                    <p className="font-medium">Dr. Muhammad Abdul Hussein </p>
                    <p>Cardiologist </p>
                    <div className="flex gap-2 oy-4">
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md"> Start Morning</button>
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md">Time 10:00 AM</button>
                    </div>
                    </div>
                  
                    </div>
                
                  </li>
                  <li className="flex justify-between items-center dark:bg-[#6a5050]  bg-[##D4A373] rounded-lg border mt-5">
                    <div className="flex justify-center items-center">
                    <div className="bg-white dark:bg-[#2c2121] px-3 py-2 rounded-md">
                      <p>2022</p>
                      <p>23</p>
                      <p>Sep</p>
                    </div>
                    <div className="px-2 py-1">
                    <p className="font-medium">Dr. Muhammad Abdul Hussein </p>
                    <p>Cardiologist </p>
                    <div className="flex gap-2 oy-4">
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md"> Start Morning</button>
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md">Time 10:00 AM</button>
                    </div>
                    </div>
                  
                    </div>
                
                  </li>
                  <li className="flex justify-between items-center dark:bg-[#6a5050]  bg-[##D4A373] rounded-lg border mt-5">
                    <div className="flex justify-center items-center">
                    <div className="bg-white dark:bg-[#2c2121] px-3 py-2 rounded-md">
                      <p>2022</p>
                      <p>23</p>
                      <p>Sep</p>
                    </div>
                    <div className="px-2 py-1">
                    <p className="font-medium">Dr. Muhammad Abdul Hussein </p>
                    <p>Cardiologist </p>
                    <div className="flex gap-2 oy-4">
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md"> Start Morning</button>
                      <button className="bg-white dark:bg-[#2c2121] px-2 p-1 rounded-md">Time 10:00 AM</button>
                    </div>
                    </div>
                  
                    </div>
                
                  </li>
              
                 
                </ul>
              </article>

            </div>
            </article>
            <article className="px-5 bg-white dark:bg-[#2c2121] mt-3">
              <div className="flex justify-between py-4 px-2"><p>Covid-19 Updates</p>
              <p>T10 September 2022<br/> AM Thursday  10:00:00 AM</p>
              </div>
            <article className="bg-gradient-to-r  flex px-2 ">
                 <div className="">
                  {/* <img className=" h-[270px] w-[270px] "  alt="doctor" src={simple2}/> */}
                 </div>
                 <div className="flex justify-center items-center text-left bg-gradient-to-r text-white bg-[#D4A373] flex-col w-full rounded-md ">
                <h3 className="text-2xl text-center">Infection Number <br/><span>500</span></h3>
                <h3 className="text-2xl text-center mt-4">Infection Ratio <br/><span>10%</span></h3>
    
                  
                 </div>
            </article>
            </article>
          </div> 
        </div>
 </div>
 </div>
  )
}
