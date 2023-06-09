import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useInstructorsClassess = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: instructorsClassess = [] } = useQuery({
        queryKey: ['instructorsClassess', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/instructor/myAddeddClass/${user?.email}`)
            return res.data;
        },
    })

    return [instructorsClassess, refetch]

}
export default useInstructorsClassess;