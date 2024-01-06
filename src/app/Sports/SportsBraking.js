import Image from "next/image";
import sports from '@/app/Img/ny.jpg'
import ronaldo from '@/app/Img/h2.jpg'
import messi from '@/app/Img/h3.jpg'
import nymer from '@/app/Img/h5.jpg'
import sakib from '@/app/Img/h6.jpg'
const SportsBraking = () => {
    return (
        <div>
            <div className="braking_img relative ">
                <Image src={sports} alt='sports' className="w-full h-[80vh]" ></Image>
                <div className="flex px-5 pb-3 text-center absolute bottom-0 left-0  flex-col w-full ">
                <a href='#' className="2xl:text-5xl text-white lg:text-3xl md:text-2xl text-shadow-md font-bold hover:text-gray-200">Powerful quake in Japan tears down homes and triggers tsunami warnings</a>
                <p className="mt-3 text-white">magnitude earthquake in Japan has caused homes to collapse, ripped up roads and triggered tsunami warnings for coastal areas</p> 
                 </div>
            </div>
            <div className=" ">
        <div className='py-3 flex items-center'><p className='w-3 h-6 badge-secondary mr-2'>
        </p><p className="text-3xl font-bold">Top News</p>
       </div>
       <div className="grid lg:grid-cols-8 md:grid-cols-10 grid-cols-1 gap-5">
       <div className=" lg:col-span-4 md:col-span-4 ">
                <Image src={sports} alt="sports" />
                <div className="py-2 px-1">
               <div className='lg:leading-6 2xl:leading-5'> <a href='#' className=" lg:font-semibold font-bold  text-[12px] lg:text-[20px] ">
               Unprecedented Colorado ruling puts courts at the center of Trump’s fate next year
               </a></div>
               <p className='2xl:mt-3 mt-1 lg:leading-5 2xl:leading-4 text-[12px] lg:text-[14px]'>
                 Russian officials say the border city of Belgorod, where 25 people were killed on Saturday, Russian officials say the border city of Belgorod, where 25 people were killed on Saturday, Russian officials say the border city of Belgorod, where 25 people were killed on Saturday, Russian officials say the border city 
                 of Belgorod, where 25 people were killed on Saturdayd,df gussian officials say the border city 
                 Russian officials say the border city of Belgorod, where 25 people were killed on Saturday, Russian officials say the border city of Belgorod, where 25 people were killed on Saturday, Russian officials say the border city of Belgorod, where 25 people were killed on Saturday, Russian officials say the border city 
                 of Belgorod, where 25 people were killed on Saturdayd,df gussian officials say the border city 
              </p>
              <div className='flex justify-between'>
              <div className='mt-4 flex items-center'><p className='w-1 h-5 badge-secondary mr-2'></p>Asia</div>
              <div className='mt-4 flex items-center'>
              10-07-2024</div>
              </div>
              </div>              
            </div>
            <div className=" lg:col-span-2 md:col-span-3 grid grid-cols-1 gap-3 ... ">
                <div className=" w-full" >
            <Image src={ronaldo} alt="sports" className="w-full 2xl:h-80 md:h-52 h-72"  />
            <div className="py-2 px-1">
               <div className='lg:leading-6 2xl:leading-5'> <a href='#' className=" lg:font-semibold font-bold text-[12px] lg:text-[16px] ">
               Unprecedented Colorado ruling puts courts at the center of Trump’s fate next year
               </a></div>
             
              <div className='flex justify-between'>
              <div className='mt-4 flex items-center'><p className='w-1 h-5 badge-secondary mr-2'></p>Asia</div>
              <div className='mt-4 flex items-center'>
              10-07-2024</div>
              </div>
              </div>
              </div>
                <div>
            <Image src={messi} alt="sports" className="w-full 2xl:h-80 md:h-52 h-72"  />
            <div className="py-2 px-1">
               <div className='lg:leading-6 2xl:leading-5'> <a href='#' className=" lg:font-semibold font-bold text-[12px] lg:text-[16px] ">
               Unprecedented Colorado ruling puts courts at the center of Trump’s fate next year
               </a></div>
             
              <div className='flex justify-between'>
              <div className='mt-4 flex items-center'><p className='w-1 h-5 badge-secondary mr-2'></p>Asia</div>
              <div className='mt-4 flex items-center'>
              10-07-2024</div>
              </div>
              </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 md:col-span-3 grid grid-cols-1 gap-3 ... ">
                <div>
            <Image src={sakib} alt="sports" className="w-full 2xl:h-80 md:h-52 h-72"  />
            <div className="py-2 px-1">
               <div className='lg:leading-6 2xl:leading-5'> <a href='#' className=" lg:font-semibold font-bold  text-[12px] lg:text-[16px] ">
               Unprecedented Colorado ruling puts courts at the center of Trump’s fate next yearss
               </a></div>
              <div className='flex justify-between'>
              <div className='mt-4 flex items-center'><p className='w-1 h-5 badge-secondary mr-2'></p>Asia</div>
              <div className='mt-4 flex items-center'>
              10-07-2024</div>
              </div>
              </div>
              </div>
                <div>
            <Image src={nymer} alt="sports" className="w-full 2xl:h-80 md:h-52 h-72"  />
            <div className="py-2 px-1">
               <div className='lg:leading-6 2xl:leading-5'> <a href='#' className=" lg:font-semibold font-bold  text-[12px] lg:text-[16px] ">
               Unprecedented Colorado ruling puts courts at the center of Trump’s fate next year
               </a></div>
              <div className='flex justify-between'>
              <div className='mt-4 flex items-center'><p className='w-1 h-5 badge-secondary mr-2'></p>Asia</div>
              <div className='mt-4 flex items-center'>
              10-07-2024</div>
              </div>
              </div>
              </div>
            </div>
            </div>
       </div>
            
        </div>
    );
};

export default SportsBraking;