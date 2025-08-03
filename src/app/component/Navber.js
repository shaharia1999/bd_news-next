
import Image from 'next/image'
// import ResponsiveButton from './responsiveButton';
const dark = '/Toggle button.png'
const Navber = () => {
    return (
        <div>
         <div className="flex fixed w-full justify-between items-center z-50  bg-[#121D45] shadow-sm shadow-buttom   dark:md:bg-[#150A09] px-2 py-2 ">
          <div className="flex justify-center items-center ">
          <ResponsiveButton/>
          <p className="text-[24px] text-white">News</p></div>
          <div className="flex justify-center gap-3 ">
            <div className="flex justify-center items-center">
              <Image
              width={50}
              height={50}
                alt="Light-mod"
                src={dark}
                className="cursor-pointer"
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