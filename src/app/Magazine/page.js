import React from 'react';
import MagazineBreaking from './MagazineBreaking';
import Bollywod from './Bollywod';
import Dhaliwood from './Dhaliwood';
import Hollywood from './Hollywood';
import MagazineHistory from './MagazineHistory';

const page = () => {
    return (
        <div className='md:pl-[85px] md:pr-[10px] 2xl:mt-24 lg:mt-20 mt-16 md:mt-16  w-full lg:px-7 pl-0  md:pt-0 md:py-10 '>
     
       <MagazineBreaking/>
       <Dhaliwood/>
       <Bollywod/>
       <Hollywood/>
       <MagazineHistory/>
        
    </div>
    );
};

export default page;