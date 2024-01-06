import React from 'react';
import EducationBraking from './EducationBraking';
import Technology from './Technology';
import Culture from './Culture';
import EducationStory from './EducationStory';


const page = () => {
    return (
        <div className='md:pl-[85px] md:pr-[10px] 2xl:mt-24 lg:mt-20 mt-16 md:mt-16  w-full lg:px-7 pl-0  md:pt-0 md:py-10 '>
       <EducationBraking/>
       <Technology/>
       <Culture/>
       <EducationStory/>
            
        </div>
    );
};

export default page;