import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useIsBookedClassess = () => {
    const { user, loading } = useAuth();

    const [axiosSecure] = useAxiosSecure()
    console.log(user?.email);

    const { refetch, data: isBookedClass = [] } = useQuery({
        queryKey: ['isBookedClassessUser',user?.email],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/student/booked/classess/${user?.email}`)
            return res.data;
        },
    })

    return [isBookedClass, refetch]

}
export default useIsBookedClassess;