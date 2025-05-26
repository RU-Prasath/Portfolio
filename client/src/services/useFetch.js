import { useEffect, useState } from 'react'
import { apiServices } from './apiServices';

const useFetch = (endpoint) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await apiServices.get(endpoint);
                setData(res);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData()
    }, [endpoint])

  return { data, loading, error }
}

export default useFetch