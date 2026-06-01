import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const useNews = (endpoint = '', params = {}) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchNews = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const url = `${BASE_URL}/news${endpoint ? '/' + endpoint : ''}`;
            const response = await axios.get(url, { params });
            setNews(response.data || []);
        } catch (err) {
            setError('No se pudieron cargar las noticias.');
            setNews([]);
        } finally {
            setLoading(false);
        }
    }, [endpoint, JSON.stringify(params)]);

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    return { news, loading, error, refetch: fetchNews };
};

export default useNews;
