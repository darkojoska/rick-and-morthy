import axios from "axios";
import { useEffect, useState } from "react"

interface IState<T> {
    loading: boolean
    error: boolean
    data: T | null
}

function useFetch<T = unknown>(url: string): IState<T> {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState<T | null>(null);

    function fetchData() {
        axios.get(url)
            .then(res => {
                const { data } = res;
                setData(data.results);
            })
            .catch(error => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchData();
    }, [url])

    return {loading, error, data};
}

export default useFetch
