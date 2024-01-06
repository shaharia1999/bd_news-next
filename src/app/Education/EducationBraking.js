

const Banner='/gaza.jpg'
const japan='/japan.jpg'
const Prime='/prime.jpg'
const Uck='/uckrain.jpg'
const Trump='/trump.jpg'
const Putin='/putin.jpg'
const jokar='/jokar.jpg'
const Byden='/byden.jpg'
import Image from 'next/image';

const EducationBraking = () => {
    return (
        <div>
        <div className="grid grid-cols-2 gap-2">
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

      </div>
     
            <div className="grid grid-cols-4 2xl:py-10 lg:py-3 lg:gap-4 gap-2 mt-2 lg:mt-0 px-2">
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
            <article className="bg-gradient-to-r   text-white relative 2xl:h-[250px] lg:h-[200px]">
                 <div className="m-0 p-0 w-full braking_img relative after:bg-slate-800 h-full">
                 <Image  width={500} height={500}className=" lg:h-[100%] h-[160px] w-[100%]"  alt="doctor" src={Uck}/>
                  </div>
                 <div className="flex px-5 pb-3 absolute bottom-0 left-0  flex-col w-full ">
                <a href='#' className="text-[16px] 2xl:text-[18px]  text-shadow-md font-bold hover:text-gray-200">Powerful quake in Japan tears down homes and triggers tsunami warnings</a>
                 </div>
            </article>
            </div>
        
      </div>
    );
};

export default EducationBraking;