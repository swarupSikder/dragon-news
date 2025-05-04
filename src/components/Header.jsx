import React from 'react';
import logo from "../assets/logo.png";
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
            <img className='w-[350px]' src={logo} alt="" />
            <p>Journalism without Fear or Favor</p>
            <p>{format(new Date(), "EEEE , MMMM d , y")}</p>
        </div>
    );
};

export default Header;