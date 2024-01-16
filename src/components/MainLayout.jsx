import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const MainLayout = () => {
    return (
        <div className='max-w-[1340px] mx-auto'>
             <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;