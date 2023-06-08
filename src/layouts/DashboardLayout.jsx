import React from 'react';
import Sidebar from '../pages/Dashboard/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <div>
            <div className=''>
            <Sidebar></Sidebar>
            </div>
            <Outlet></Outlet>
        </div>
        </div>
    );
};

export default DashboardLayout;