import React from 'react';
import DashCustomNavlink from './DashCustomNavlink';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DashCusNavMobile from './DashCusNavMobile';

export const AdminNavlistPC = () => {
    const admin = true
    return (
        <div>
            {admin && <DashCustomNavlink to='/dashboard/manageClass' title='Manage Class' icon={<LocalLibraryIcon></LocalLibraryIcon>}></DashCustomNavlink>}
            {admin && <DashCustomNavlink to='/dashboard/manageUsers' title='Manage Users' icon={<ManageAccountsIcon></ManageAccountsIcon>}></DashCustomNavlink>}
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
