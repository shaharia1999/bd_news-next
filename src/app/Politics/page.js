
import HumanStory from "./HumanStory";
import PoliticBengali from "./PoliticBangla";
import PoliticBraking from "./PoliticBraking";
import PoliticInternational from "./PoliticInternational";

const Politics = () => {
    return (
        <div className="md:pl-[85px] md:pr-[10px] 2xl:mt-24 lg:mt-20 mt-16 md:mt-16  w-full lg:px-7 pl-0  md:pt-0 md:py-10  ">
       <PoliticBraking></PoliticBraking>
       <PoliticInternational></PoliticInternational>
       <PoliticBengali/>
       <HumanStory/>
       </div>
    );
};

export default Politics;