import axios from "axios";
import { useEffect, useState } from "react"

interface IState<T> {
    loading: boolean
    error: boolean
    data: T | null
    totalPages: number | null
    totalItems: number | null
}

function useFetch<T = unknown>(url: string): IState<T> {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState<T | null>(null);
    const [totalPages, setTotalPages] = useState<number | null>(null);
    const [totalItems, setTotalItems] = useState<number | null>(null);

    useEffect(() => {
        function fetchData() {
            axios.get(url)
                .then(res => {
                    const apiData = res.data;
                    setTotalItems(apiData.info?.count || null);
                    setTotalPages(apiData.info?.pages || null);
                    setData(apiData.results ? apiData.results : apiData);
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

    return { loading, error, data, totalPages, totalItems };
}

export default useFetch
