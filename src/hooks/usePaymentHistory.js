import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const usePaymentHistory = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: PaymentHistory = [] } = useQuery({
        queryKey: ['PaymentHistory', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/student/payment/history/${user?.email}`)
            return res.data;
        },
    })

    return [PaymentHistory, refetch]

}
export default usePaymentHistory;