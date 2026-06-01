import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, RefreshCw } from 'lucide-react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import './SearchPage.css';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [inputVal, setInputVal] = useState(query);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!query.trim()) return;
        setLoading(true);
        setError(null);
        axios.get(`${BASE_URL}/news/search`, { params: { q: query } })
            .then(res => setNews(res.data || []))
            .catch(() => setError('No se pudieron cargar los resultados.'))
            .finally(() => setLoading(false));
    }, [query]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (inputVal.trim()) setSearchParams({ q: inputVal });
    };

    return (
        <div className="search-page">
            <motion.div
                className="search-header"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="container">
                    <h1 className="search-title">
                        <Search size={28} />
                        Buscar noticias
                    </h1>
                    <form className="search-form-big" onSubmit={handleSearch}>
                        <input
                            type="text"
                            value={inputVal}
                            onChange={e => setInputVal(e.target.value)}
                            placeholder="Busca por tema, palabra clave, fuente..."
                            autoFocus
                        />
                        <button type="submit">Buscar</button>
                    </form>
                    {query && (
                        <p className="search-meta">
                            {loading ? 'Buscando...' : `${news.length} resultados para "${query}"`}
                        </p>
                    )}
                </div>
            </motion.div>

            <div className="container search-results">
                {!query && (
                    <div className="empty-state">
                        <span style={{ fontSize: '4rem' }}>🔍</span>
                        <p>Escribe algo para buscar noticias</p>
                    </div>
                )}

                {loading && (
                    <div className="news-grid-responsive">
                        {Array(6).fill(0).map((_, i) => (
                            <div key={i} className="news-card skeleton-card">
                                <div className="skeleton" style={{ height: '180px', borderRadius: '12px' }} />
                                <div className="card-body">
                                    <div className="skeleton" style={{ height: '14px', width: '100%', marginBottom: '8px', borderRadius: '4px' }} />
                                    <div className="skeleton" style={{ height: '14px', width: '70%', borderRadius: '4px' }} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {error && (
                    <div className="error-state">
                        <p>⚠️ {error}</p>
                        <button onClick={() => setSearchParams({ q: query })} className="retry-btn">
                            <RefreshCw size={16} /> Reintentar
                        </button>
                    </div>
                )}

                {!loading && !error && query && news.length === 0 && (
                    <div className="empty-state">
                        <span style={{ fontSize: '4rem' }}>😕</span>
                        <p>No se encontraron noticias para <strong>"{query}"</strong></p>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Intenta con otras palabras clave</p>
                    </div>
                )}

                {!loading && news.length > 0 && (
                    <motion.div
                        className="news-grid-responsive"
                        initial="hidden"
                        animate="show"
                        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
                    >
                        {news.map((article, i) => (
                            <motion.div
                                key={i}
                                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                            >
                                <NewsCard article={article} index={i} />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
