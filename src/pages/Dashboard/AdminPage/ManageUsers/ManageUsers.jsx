import React, { useContext } from 'react';
import { AuthContext } from '../../../../ContextProvider/AuthContextProvider';

const ManageUsers = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            ManageUsers Page
        </div>
    );
};

export default ManageUsers;