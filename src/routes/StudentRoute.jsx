
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import useAuth from '../hooks/useAuth';
import useInstructor from '../hooks/useInstructor';
import useAdmin from '../hooks/useAdmin';

const StudentRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading] = useInstructor();
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();

    if(loading || isAdminLoading || isInstructorLoading){
        return <Spinner></Spinner>
    }

    if (user && !isInstructor && !isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default StudentRoute;