import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import axios from 'axios';

const useIsApprovedClassess = () => {
    const { user, loading } = useAuth();

    const { refetch, data: isApprovedClassess = [] } = useQuery({
        queryKey: ['isApprovedClassess', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/classess`)
            return res.data;
        },
    })

    return [isApprovedClassess, refetch]

}
export default useIsApprovedClassess;