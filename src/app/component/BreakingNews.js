import Marquee from 'react-fast-marquee';

const Banner='/gaza.jpg'
const japan='/japan.jpg'
const Prime='/prime.jpg'
const Uck='/uckrain.jpg'
const Trump='/trump.jpg'
const Putin='/putin.jpg'
const jokar='/jokar.jpg'
const Byden='/byden.jpg'
import Image from 'next/image';

const BreakingNews = () => {
    return (
        <div className=" md:pl-[85px] md:pr-[10px] 2xl:mt-24 lg:mt-20 mt-16 md:mt-16  w-full lg:px-7 pl-0  md:pt-0 md:py-10  ">
        {/* Main Div */}
        <div className={` lg:gap-x-8 lg:grid lg:grid-cols-12 '}`} >
          <div className="lg:col-span-8 ">
            {/* main Breaking News ********************************************************/}
            <article className="bg-gradient-to-r   text-white relative ">
                 <div className="m-0 p-0 w-full braking_img relative after:bg-slate-800">
                 <Image  width={500}
                  height={500} className="2xl:h-[500px] lg:h-[320px] md:h-[300px] w-[100%]"  alt="doctor" src={Banner}/>
                  </div>
                 <div className="flex px-5 pb-3 absolute bottom-0 left-0  flex-col w-full ">
                <a href='#' className="2xl:text-5xl lg:text-3xl md:text-2xl text-shadow-md font-bold hover:text-gray-200">Powerful quake in Japan tears down homes and triggers tsunami warnings</a>
                <p className="mt-3">magnitude earthquake in Japan has caused homes to collapse, ripped up roads and triggered tsunami warnings for coastal areas</p> 
                 </div>
            </article>

            {/* Sub Breaking News ********************************************************/}
            <Marquee>
            <div className="grid grid-cols-3 2xl:py-10 lg:py-3 lg:gap-4 gap-2 mt-2 lg:mt-0 px-2">
            <article className="bg-gradient-to-r   text-white relative 2xl:h-[250px] lg:h-[200px]">
                 <div className="m-0 p-0 w-full braking_img relative after:bg-slate-800 h-full">
                 <Image  width={500} height={500}  className="lg:h-[100%] h-[160px] w-[100%] "  alt="doctor" src={Prime}/>
                  </div>
                 <div className="flex px-5 pb-3 absolute bottom-0 left-0  flex-col w-full ">
                <a href='#' className="2xl:text-[18px] text-[16px] leading-4  text-shadow-md font-bold hover:text-gray-200">Powerful quake in Japan tears down homes and triggers tsunami warnings</a>
                 </div>
            </article>
            <article className="bg-gradient-to-r   text-white relative 2xl:h-[250px] lg:h-[200px]">
                 <div className="m-0 p-0 w-full braking_img relative after:bg-slate-800 h-full">
                 <Image  width={500} height={500} className=" lg:h-[100%] h-[160px] w-[100%]"  alt="doctor" src={japan}/>
                  </div>
                 <div className="flex px-5 pb-3 absolute bottom-0 left-0  flex-col w-full ">
                <a href='#' className="text-[16px] 2xl:text-[18px] leading-4  text-shadow-md font-bold hover:text-gray-200">Powerful quake in Japan tears down homes and triggers tsunami warnings</a>
                 </div>
            </article>
            <article className="bg-gradient-to-r   text-white relative 2xl:h-[250px] lg:h-[200px]">
                 <div className="m-0 p-0 w-full braking_img relative after:bg-slate-800 h-full">
                 <Image  width={500} height={500}className=" lg:h-[100%] h-[160px] w-[100%]"  alt="doctor" src={Uck}/>
                  </div>
                 <div className="flex px-5 pb-3 absolute bottom-0 left-0  flex-col w-full ">
                <a href='#' className="text-[16px] 2xl:text-[18px]  text-shadow-md font-bold hover:text-gray-200">Powerful quake in Japan tears down homes and triggers tsunami warnings</a>
                 </div>
            </article>
            </div>
            </Marquee>
          </div>

          {/* Side bar News ************************************************************/}
           <div className="lg:col-span-4 mt-2 lg:mt-0 px-2 md:px-0 ">
            <article className="grid grid-cols-2 grid-rows-2 2xl:gap-5 gap-2 ">
              <div className="car bg-base-100   2xl:h-96 ">
                <figure> <Image  width={500} height={500} src={Trump} alt="img" className='2xl:h-44 lg:h-32' /></figure>
                <div className="py-2 px-1">
                  <div className=' 2xl:leading-5 leading-4'> <a href='#' className=" font-bold text-[14px] 2xl:text-[18px] ">
                  Unprecedented Colorado ruling puts courts at the center of Trump’s fate next year
                  </a></div>
                  <div className="badge badge-secondary">NEW</div>
                  <p className='2xl:mt-3 mt-1 lg:leading-3 2xl:leading-4 text-[12px] l2xl:text-[14px]'>Russian officials say the border city of Belgorod, where 25 people were killed on Saturday,
                 </p>
                 </div>
                </div>
              <div className="car bg-base-100  2xl:h-96 ">
                <figure> <Image  width={500} height={500} src={Byden} alt="img" className='2xl:h-44 lg:h-32' /></figure>
                <div className="py-2 px-1">
                  <div className='leading-4 2xl:leading-5'> <a href='#' className=" font-bold text-[14px] 2xl:text-[16px] ">
                  Unprecedented Colorado ruling puts courts at the center of Trump’s fate next year
                  </a></div>
                  <div className="badge badge-secondary">NEW</div>
                  <p className='2xl:mt-3 mt-1 lg:leading-3 2xl:leading-4 text-[12px] l2xl:text-[14px]'>Russian officials say the border city of Belgorod, where 25 people were killed on Saturday,
                 </p>
                 </div>
                </div>
              <div className="car bg-base-100  2xl:h-96">
                <figure> <Image  width={500} height={500} src={Putin} alt="img" className='2xl:h-44 lg:h-32' /></figure>
                <div className="py-2 px-1">
                  <div className='leading-4  2xl:leading-5'> <a href='#' className=" font-bold text-[14px] 2xl:text-[16px] ">
                  Unprecedented Colorado ruling puts courts at the center of Trump’s fate next year
                  </a></div>
                  <div className="badge badge-secondary">NEW</div>
                  <p className='2xl:mt-3 mt-1 lg:leading-3 2xl:leading-4 text-[12px] l2xl:text-[14px]'>Russian officials say the border city of Belgorod, where 25 people were killed on Saturday,
                 </p>
                 </div>
                </div>
              <div className="car bg-base-100  2xl:h-96 ">
                <figure> <Image  width={500} height={500} src={jokar} alt="img" className='2xl:h-44 lg:h-32' /></figure>
                <div className="py-2 px-1">
                  <div className='leading-4 2xl:leading-5'> <a href='#' className=" font-bold text-[14px] 2xl:text-[16px] ">
                  Unprecedented Colorado ruling puts courts at the center of Trump’s fate next year
                  </a></div>
                  <div className="badge badge-secondary">NEW</div>
                  <p className='2xl:mt-3 mt-1 lg:leading-3 2xl:leading-4 text-[12px] l2xl:text-[14px]'>Russian officials say the border city of Belgorod, where 25 people were killed on Saturday,
                 </p>
                 </div>
                </div>
            </article>
         
          </div> 
        </div>
 </div>
    );
};

export default BreakingNews;