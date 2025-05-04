import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImage from "../assets/user.png";
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);

    const handleLogout = () => {
        logOut().then(()=>{
            alert('user logged out successfully....');
        })
        .catch((error)=> {
            alert(error.code, error.message);
        });
    }

    return (
        <div className='flex items-center justify-between'>
            <div className=''>{user && user.email}</div>

            <div className='nav flex gap-5 text-sky-700'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>

            <div className='login-btn flex gap-5'>
                <img className='w-10 h-10 border-2 rounded-full'  src={`${user? user.photoUrl : userImage}`} alt="" />
                {
                    user ?
                        <button onClick={handleLogout} className='btn btn-primary px-8'>Logout</button> :
                        <Link to="/auth/login" className='btn btn-primary px-8'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;