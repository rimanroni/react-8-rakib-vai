import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='py-4 shadow-md'>
            <nav className='flex justify-between px-12 mt-2 items-center text-2xl'>
                <NavLink to={'/'} id='home-logo' className='font-bold'>Phones Shope</NavLink>
                <div className='space-x-4'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/favorite'}>Favorite</NavLink>
                    <NavLink to={'/singup'}>Sing Up</NavLink>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;