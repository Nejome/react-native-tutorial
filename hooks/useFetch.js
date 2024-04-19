import {useEffect, useState} from "react";
import axios from "axios";

export default function useFetch({endpoint, query}) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: query,
        headers: {
            'X-RapidAPI-Key': '42f8691843msh8e434b6a66c5e15p14d55ejsn71b4d3921000',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    const refetch = () => {
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {data, isLoading, error, refetch};
}