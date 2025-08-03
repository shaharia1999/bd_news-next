import Image from 'next/image';
// import sakib from '@/app/Img/h6.jpg'
import ronaldo from '@/app/Img/h2.jpg'
import messi from '@/app/Img/h3.jpg'
// import nymer from '@/app/Img/h5.jpg'
const img='/younus.jpg'
const img1='/2.jpg'
const img3='/1.jpg'
const img4='/3.jpg'
const img5='/4.jpg'
const img6='/5.jpg'

const page = () => {
    return (
        <div className=" md:pl-[85px] md:pr-[10px] 2xl:mt-24 lg:mt-20 mt-16 md:mt-16  w-full lg:px-7 pl-0  md:pt-0 md:py-10">
            <div className="grid grid-cols-4 gap-3">
                <div className="lg:col-span-3 col-span-4">
                    <article>
                        <h1 className='lg:text-3xl font-bold '>This is the single product Page Here I will Add Dynamic Product Using Express And Mongoose</h1>
                        <Image className="2xl:h-[500px] lg:h-[500px] md:h-[500px] w-full mt-2" alt="doctor" src={messi} />
                        <div className='flex justify-between mt-1' >
                            <p className='font-semibold text-2xl'> News Strong SubTitle</p>
                            <p className='font-medium text-1xl'>01-05-2024</p>

                        </div>
                        <p>Thousands of passengers face flight cancellations after major US airlines grounded dozens of Boeing jets after a mid-flight blowout over Oregon.

                            The US aviation regulator said 171 Boeing 737 Max 9s must be grounded for checks after part of an Alaska Airlines plane fuselage fell off on Friday.

                            Alaska said flight disruptions are expected to last into next week. United Airlines has grounded 79 planes.

                            Disruptions are likely to primarily affect flights in the US.

                            It follows regulator the Federal Aviation Administration (FAA) orderingimmediate inspectio of 737 Max 9s worldwide.

                            Required inspections would take around four to eight hours per aircraft, it said.

                            The European Union Aviation Safety Agency (EASA) is following the FAA approach, but flight disruptions on the continent are expected to be minimal.

                            EASA said it believes no European airlines operate Max 9s with the configuration covered by the FAA order.

                            One of the world largest intercontinental airports, London Heathrow, said there was no impact on flights.

                            The bulk of the affected planes are owned by US airlines. United Airlines has grounded all 79 of its Max 9 planes.

                            Alaska said it cancelled 160 flights on Saturday, affecting about 23,000 passengers.

                            Other airlines which also fly the planes have temporarily taken them out of service.

                            Boeing said it welcomed the FAA decision, adding its teams were in close contact with the regulator.

                            During Friday incident, Alaska Airlines flight 1282 from Portland, Oregon, to Ontario, California, reached 16,000ft (4,876m) when it began an emergency descent, according to flight tracking data.

                            Passengers on board said a large section of the plane outer shell fell to the ground shortly after take-off.

                            Images sent to news outlets show the night sky and lights of Portland visible through the gap in the fuselage, with insulation material and other debris also seen.

                            One passenger said the gap was as wide as a refrigerator while another said a child shirt was ripped off in the wind as the plane made its emergency landing.

                        </p>
                    </article>

                </div>
                <div className="lg:col-span-1 col-span-4">
                <div className=" lg:col-span-2 md:col-span-4 grid lg:grid-cols-1 md:grid-cols-2 gap-3 ... ">
                <div className=" w-full" >
            <Image src={ronaldo} alt="sports" className="w-full 2xl:h-80 md:h-52 h-72"  />
            <div className="py-2 px-1">
               <div className='lg:leading-6 2xl:leading-5'> <a href='#' className=" lg:font-semibold font-bold text-[12px] lg:text-[16px] ">
               Unprecedented Colorado ruling puts courts at the center of Trump fate next year
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
               Unprecedented Colorado ruling puts courts at the center  fate next year
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
               Unprecedented Colorado ruling puts courts at the center of Trump fate next year
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
               Unprecedented Colorado ruling puts courts at the center of Trump fate next year
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
            {/* Blog Related Page */}
            <div>
        <div className='py-3 flex items-center'><p className='w-3 h-6 badge-secondary mr-2'>
       </p><p className="text-3xl font-bold">
         Poem</p>
      </div>
   <div className='All-News grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  lg:gap-5 gap-3  2xl:gap-8 '>
   <article>
   <div className="car bg-base-100   h-auto ">
        <figure><Image src={img} width={500}
         height={500} alt="img" className='2xl:h-96 md:h-60 w-full' /></figure>
        <div className="py-2 px-1">
          <div className='lg:leading-6 2xl:leading-5'> <a href='#' className=" font-bold text-[12px] lg:text-[20px] ">
          Unprecedented Colorado ruling puts courts at the center of Trump fate next year
          </a></div>
          <p className='2xl:mt-3 mt-1 lg:leading-5 2xl:leading-4 text-[12px] lg:text-[14px]'>
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
   </article>
   <article>
   <div className="car bg-base-100 h-auto ">
        <figure><Image src={img1} width={500}
         height={500} alt="img" className='2xl:h-96 md:h-60 w-full' /></figure>
        <div className="py-2 px-1">
          <div className='lg:leading-6 2xl:leading-5'> <a href='#' className=" font-bold text-[12px] lg:text-[20px] ">
          Unprecedented Colorado ruling puts courts at the center of Trump fate next year
          </a></div>
          <p className='2xl:mt-3 mt-1 lg:leading-5 2xl:leading-4 text-[12px] lg:text-[14px]'>
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
   </article>
  
   <article>
   <div className="car bg-base-100 h-auto  ">
        <figure><Image src={img3} width={500}
         height={500} alt="img" className='2xl:h-96 md:h-60 w-full' /></figure>
        <div className="py-2 px-1">
          <div className='lg:leading-6 2xl:leading-5'> <a href='#' className=" font-bold text-[12px] lg:text-[20px] ">
          Unprecedented Colorado ruling puts courts at the center of Trump fate next year
          </a></div>
          <p className='2xl:mt-3 mt-1 lg:leading-5 2xl:leading-4 text-[12px] lg:text-[14px]'>
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
   </article>
   <article>
   <div className="car bg-base-100  h-auto  ">
        <figure><Image src={img4} width={500}
         height={500} alt="img" className='2xl:h-96 md:h-60 w-full' /></figure>
        <div className="py-2 px-1">
          <div className='lg:leading-6 2xl:leading-5'> <a href='#' className=" font-bold text-[12px] lg:text-[20px] ">
          Unprecedented Colorado ruling puts courts at the center of Trump fate next year
          </a></div>
          <p className='2xl:mt-3 mt-1 lg:leading-5 2xl:leading-4 text-[12px] lg:text-[14px]'>
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
   </article>
   <article>
   <div className="car bg-base-100   2xl:h-auto  ">
        <figure><Image src={img5} width={500}
         height={500} alt="img" className='2xl:h-96 md:h-60 w-full' /></figure>
        <div className="py-2 px-1">
          <div className='lg:leading-6 2xl:leading-5'> <a href='#' className=" font-bold text-[12px] lg:text-[20px] ">
          Unprecedented Colorado ruling puts courts at the center of Trump fate next year
          </a></div>
          <p className='2xl:mt-3 mt-1 lg:leading-5 2xl:leading-4 text-[12px] lg:text-[14px]  justify-center'>
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
   </article>
   <article>
   <div className="car bg-base-100 h-auto  ">
        <figure><Image src={img6} width={500}
         height={500} alt="img" className='2xl:h-96 md:h-60 w-full' /></figure>
        <div className="py-2 px-1">
          <div className='lg:leading-6 2xl:leading-5'> <a href='#' className=" font-bold text-[12px] lg:text-[20px] ">
          Unprecedented Colorado ruling puts courts at the center of Trump fate next year
          </a></div>
          <p className='2xl:mt-3 mt-1 lg:leading-5 2xl:leading-4 text-[12px] lg:text-[14px]'>
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
   </article>
  
</div>
   </div>
        </div>
    );
};

export default page;