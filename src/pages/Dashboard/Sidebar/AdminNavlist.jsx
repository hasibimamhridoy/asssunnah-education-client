import React from 'react';
import DashCustomNavlink from './DashCustomNavlink';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DashCusNavMobile from './DashCusNavMobile';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';

export const AdminNavlistPC = () => {
    const [isAdmin] = useAdmin()
    console.log(isAdmin);
   
    return (
        <div>
            {isAdmin && <DashCustomNavlink to='/dashboard/manageClass' title='Manage Class' icon={<LocalLibraryIcon></LocalLibraryIcon>}></DashCustomNavlink>}
            {isAdmin && <DashCustomNavlink to='/dashboard/manageUsers' title='Manage Users' icon={<ManageAccountsIcon></ManageAccountsIcon>}></DashCustomNavlink>}
        </div>
    );
};

export const AdminNavlistMobile = ({handleDrawerToggle}) => {
    const admin = false
    return (
        <div>
            {admin && <DashCusNavMobile to='/dashboard/manageClass' title='Manage Class' icon={<LocalLibraryIcon></LocalLibraryIcon>}></DashCusNavMobile>}
            {admin && <DashCusNavMobile to='/dashboard/manageUsers' title='Manage Users' icon={<ManageAccountsIcon></ManageAccountsIcon>}></DashCusNavMobile>}
        </div>
    );
};
