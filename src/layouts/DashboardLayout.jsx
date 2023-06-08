import React from 'react';
import Sidebar from '../pages/Dashboard/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className='flex'>

         <div className='lg:w-44'>
            <Sidebar></Sidebar>
        </div>

            <div className='mt-16 ml-3 lg:mt-5 lg:ml-5'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;