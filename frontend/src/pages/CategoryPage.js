import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, RefreshCw } from 'lucide-react';
import NewsCard from '../components/NewsCard';
import useNews from '../hooks/useNews';
import './CategoryPage.css';

const CATEGORY_INFO = {
    colombia: { label: 'Colombia', emoji: '🇨🇴', color: '#e63946', desc: 'Las últimas noticias de Colombia' },
    internacional: { label: 'Internacional', emoji: '🌍', color: '#457b9d', desc: 'Noticias del mundo entero' },
    politica: { label: 'Política', emoji: '🏛️', color: '#1d3557', desc: 'Política nacional e internacional' },
    economia: { label: 'Economía', emoji: '📈', color: '#ff9800', desc: 'Mercados, finanzas y negocios' },
    deportes: { label: 'Deportes', emoji: '⚽', color: '#2196f3', desc: 'Fútbol, tenis, ciclismo y más' },
    tecnologia: { label: 'Tecnología', emoji: '💻', color: '#9c27b0', desc: 'Innovación, gadgets y ciencia tech' },
    entretenimiento: { label: 'Entretenimiento', emoji: '🎬', color: '#e91e63', desc: 'Cine, música, cultura y farándula' },
    ciencia: { label: 'Ciencia', emoji: '🔬', color: '#00bcd4', desc: 'Descubrimientos y avances científicos' },
    salud: { label: 'Salud', emoji: '🏥', color: '#4caf50', desc: 'Medicina, bienestar y salud pública' },
};

const CategoryPage = () => {
    const { category } = useParams();
    const info = CATEGORY_INFO[category] || { label: category, emoji: '📰', color: '#e63946', desc: '' };
    const { news, loading, error, refetch } = useNews(category);

    const container = {
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } }
    };
    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="category-page">
            {/* Header banner */}
            <motion.div
                className="category-header"
                style={{ '--cat-color': info.color }}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <div className="category-breadcrumb">
                        <Link to="/">Inicio</Link>
                        <ChevronRight size={14} />
                        <span>{info.label}</span>
                    </div>
                    <div className="category-title-row">
                        <span className="category-emoji">{info.emoji}</span>
                        <div>
                            <h1 className="category-title">{info.label}</h1>
                            <p className="category-desc">{info.desc}</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="container category-content">
                {loading && (
                    <div className="news-grid-responsive">
                        {Array(9).fill(0).map((_, i) => (
                            <div key={i} className="news-card skeleton-card">
                                <div className="skeleton skeleton-img" style={{ height: '180px' }} />
                                <div className="card-body">
                                    <div className="skeleton skeleton-line" style={{ height: '14px', width: '100%', marginBottom: '8px' }} />
                                    <div className="skeleton skeleton-line" style={{ height: '14px', width: '80%', marginBottom: '8px' }} />
                                    <div className="skeleton skeleton-line" style={{ height: '10px', width: '50%' }} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {error && (
                    <div className="error-state">
                        <p>⚠️ {error}</p>
                        <button onClick={refetch} className="retry-btn">
                            <RefreshCw size={16} /> Reintentar
                        </button>
                    </div>
                )}

                {!loading && !error && news.length === 0 && (
                    <div className="empty-state">
                        <span className="empty-emoji">{info.emoji}</span>
                        <p>No hay noticias disponibles en esta categoría.</p>
                    </div>
                )}

                {!loading && news.length > 0 && (
                    <motion.div
                        className="news-grid-responsive"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        {news.map((article, i) => (
                            <motion.div key={i} variants={item}>
                                <NewsCard article={{ ...article, category: info.label }} index={i} />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
