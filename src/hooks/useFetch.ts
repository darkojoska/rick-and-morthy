import axios from "axios";
import { useEffect, useState } from "react"

interface IState<T> {
    loading: boolean
    error: boolean
    data: T | null
    totalPages: number
}

function useFetch<T = unknown>(url: string): IState<T> {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState<T | null>(null);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        function fetchData() {
            axios.get(url)
                .then(res => {
                    const { data } = res;
                    setTotalPages(data.info?.pages); 
                    setData(data.results ? data.results : data);
                })
                .catch(error => {
                    setError(true);
                })
                .finally(() => {
                    setLoading(false);
                })
        }

        fetchData();
    }, [url])

    return {loading, error, data, totalPages};
}

export default useFetch
