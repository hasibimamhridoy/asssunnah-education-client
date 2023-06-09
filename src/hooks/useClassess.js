import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useClassess = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: classess = [] } = useQuery({
        queryKey: ['classess', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/admin/classess`)
            return res.data;
        },
    })

    return [classess, refetch]

}
export default useClassess;