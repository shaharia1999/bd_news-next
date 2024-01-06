import International from "./International";
import SportsBangla from "./SportsBangla";
import SportsBraking from "./SportsBraking";
import SportsHistory from "./SportsHistopry";


const Sports = () => {
    return (
        <div className='md:pl-[85px] md:pr-[10px] 2xl:mt-24 lg:mt-20 mt-16 md:mt-16  w-full lg:px-7 pl-0  md:pt-0 md:py-10 '>
      <div>
        <SportsBraking></SportsBraking>
        <International/>
        <SportsBangla/>
        <SportsHistory/>
         </div>
            
        </div>
    );
};

export default Sports;