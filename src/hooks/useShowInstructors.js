import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import axios from 'axios';

const useShowInstructors = () => {
    const { user, loading } = useAuth();

    const { refetch, data: ShowInstructors = [] } = useQuery({
        queryKey: ['ShowInstructors'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/instructors`)
            return res.data;
        },
    })

    return [ShowInstructors, refetch]

}
export default useShowInstructors;