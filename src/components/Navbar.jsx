import React from 'react';
import { Link, NavLink } from 'react-router';
import userImage from "../assets/user.png";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className=''></div>

            <div className='nav flex gap-5 text-sky-700'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>

            <div className='login-btn flex gap-5'>
                <img className='' src={userImage} alt="" />
                <Link to="/auth/login" className='btn btn-primary px-8'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;