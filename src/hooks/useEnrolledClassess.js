import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useEnrolled = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: Enrolled = [] } = useQuery({
        queryKey: ['Enrolled', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/student/enrolled/classess/${user?.email}`)
            return res.data;
        },
    })

    return [Enrolled, refetch]

}
export default useEnrolled;