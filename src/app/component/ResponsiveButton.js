'use client'
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Res } from "./Redux/slice";
import { useDispatch } from 'react-redux';
const ResponsiveButton = () => {
    const dispatch = useDispatch()
    return (
        <div>
        <GiHamburgerMenu className="text-white text-2xl font-medium mr-2 md:hidden" onClick={()=>dispatch(Res())} />
        </div>
    );
};

export default ResponsiveButton;