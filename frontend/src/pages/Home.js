import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Clock, ChevronRight, RefreshCw } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';
import HeroSection from '../components/HeroSection';
import NewsCard from '../components/NewsCard';
import useNews from '../hooks/useNews';
import { ThemeContext } from '../context/ThemeContext';
import {
    IconColombia, IconDeportes, IconTecnologia,
    IconEconomia, IconCiencia, IconSalud, IconEntretenimiento, IconPolitica
} from '../components/CategoryIcons';
import './Home.css';

const CATEGORIES_QUICK = [
    { label: 'Colombia', path: 'colombia', color: '#e63946', icon: IconColombia },
    { label: 'Deportes', path: 'deportes', color: '#2196f3', icon: IconDeportes },
    { label: 'Tecnología', path: 'tecnologia', color: '#9c27b0', icon: IconTecnologia },
    { label: 'Economía', path: 'economia', color: '#ff9800', icon: IconEconomia },
    { label: 'Ciencia', path: 'ciencia', color: '#00bcd4', icon: IconCiencia },
    { label: 'Salud', path: 'salud', color: '#4caf50', icon: IconSalud },
    { label: 'Entretenimiento', path: 'entretenimiento', color: '#e91e63', icon: IconEntretenimiento },
    { label: 'Política', path: 'politica', color: '#1d3557', icon: IconPolitica },
];

const SkeletonCard = () => (
    <div className="news-card skeleton-card">
        <div className="skeleton" style={{ height: '180px', borderRadius: '12px 12px 0 0' }} />
        <div className="card-body">
            <div className="skeleton" style={{ height: '14px', width: '100%', marginBottom: '8px', borderRadius: '4px' }} />
            <div className="skeleton" style={{ height: '14px', width: '80%', marginBottom: '8px', borderRadius: '4px' }} />
            <div className="skeleton" style={{ height: '10px', width: '50%', borderRadius: '4px' }} />
        </div>
    </div>
);

const SectionHeader = ({ icon: Icon, title, linkTo }) => (
    <div className="section-header">
        <div className="section-header-left">
            {Icon && <Icon size={20} className="section-icon" />}
            <h2 className="section-title">{title}</h2>
        </div>
        {linkTo && (
            <Link to={linkTo} className="section-more">
                Ver todo <ChevronRight size={16} />
            </Link>
        )}
    </div>
);

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } })
};

const Home = () => {
    const { darkMode } = useContext(ThemeContext);
    const { news: allNews, loading, error, refetch } = useNews('');
    const { news: colombiaNews, loading: loadingCo } = useNews('colombia');
    const { news: techNews, loading: loadingTech } = useNews('tecnologia');
    const { news: sportsNews, loading: loadingSports } = useNews('deportes');

    const heroArticle = allNews[0] || null;
    const sideArticles = allNews.slice(1, 5);
    const featuredNews = allNews.slice(1, 5);
    const latestNews = allNews.slice(5, 14);
    const tickerItems = allNews.slice(0, 8).map(a => a.title).join('  •  ');

    return (
        <div className={`home ${darkMode ? 'dark' : ''}`}>
            {/* Animated Hero Banner */}
            <HeroBanner />

            {/* Breaking news ticker */}
            {allNews.length > 0 && (
                <div className="breaking-ticker">
                    <div className="container ticker-container">
                        <span className="ticker-label"><Zap size={12} /> Últimas</span>
                        <div className="ticker-track">
                            <span className="ticker-content">{tickerItems}</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Category pills */}
            <div className="container" id="categories">
                <motion.div
                    className="category-pills"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {CATEGORIES_QUICK.map((cat, i) => (
                        <motion.div
                            key={cat.path}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 + 0.3 }}
                        >
                            <Link
                                to={`/category/${cat.path}`}
                                className="category-pill"
                                style={{ '--pill-color': cat.color }}
                            >
                                <cat.icon size={15} />
                                {cat.label}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Hero news section */}
            {loading ? (
                <div className="container hero-skeleton">
                    <div className="skeleton" style={{ height: '420px', borderRadius: '20px' }} />
                </div>
            ) : error ? (
                <div className="container error-state">
                    <p>⚠️ {error}</p>
                    <button onClick={refetch} className="retry-btn">
                        <RefreshCw size={16} /> Reintentar
                    </button>
                </div>
            ) : (
                <HeroSection mainArticle={heroArticle} sideArticles={sideArticles} />
            )}

            {/* Featured news */}
            <section className="home-section" id="latest">
                <div className="container">
                    <SectionHeader icon={TrendingUp} title="Noticias Destacadas" linkTo="/category/colombia" />
                    <div className="news-grid-4">
                        {loading
                            ? Array(4).fill(0).map((_, i) => <SkeletonCard key={i} />)
                            : featuredNews.map((article, i) => (
                                <motion.div key={i} custom={i} variants={cardVariants} initial="hidden" animate="show">
                                    <NewsCard article={{ ...article, category: 'Destacado' }} variant="featured" index={i} />
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* Latest + Sidebar */}
            <section className="home-section">
                <div className="container">
                    <div className="main-sidebar-grid">
                        <div>
                            <SectionHeader icon={Clock} title="Últimas Noticias" />
                            <div className="news-grid-3">
                                {loading
                                    ? Array(6).fill(0).map((_, i) => <SkeletonCard key={i} />)
                                    : latestNews.map((article, i) => (
                                        <motion.div key={i} custom={i} variants={cardVariants} initial="hidden" animate="show">
                                            <NewsCard article={article} index={i} />
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </div>
                        <aside className="sidebar">
                            <div className="sidebar-widget">
                                <SectionHeader title="🇨🇴 Colombia" linkTo="/category/colombia" />
                                <div className="sidebar-list">
                                    {loadingCo
                                        ? Array(3).fill(0).map((_, i) => <div key={i} className="skeleton" style={{ height: '70px', borderRadius: '8px', marginBottom: '8px' }} />)
                                        : colombiaNews.slice(0, 4).map((article, i) => (
                                            <NewsCard key={i} article={article} variant="horizontal" index={i} />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="sidebar-widget">
                                <SectionHeader title="💻 Tecnología" linkTo="/category/tecnologia" />
                                <div className="sidebar-list">
                                    {loadingTech
                                        ? Array(3).fill(0).map((_, i) => <div key={i} className="skeleton" style={{ height: '70px', borderRadius: '8px', marginBottom: '8px' }} />)
                                        : techNews.slice(0, 4).map((article, i) => (
                                            <NewsCard key={i} article={article} variant="horizontal" index={i} />
                                        ))
                                    }
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Sports */}
            <section className="home-section sports-section">
                <div className="container">
                    <SectionHeader icon={TrendingUp} title="⚽ Deportes" linkTo="/category/deportes" />
                    <div className="news-grid-4">
                        {loadingSports
                            ? Array(4).fill(0).map((_, i) => <SkeletonCard key={i} />)
                            : sportsNews.slice(0, 4).map((article, i) => (
                                <motion.div key={i} custom={i} variants={cardVariants} initial="hidden" animate="show">
                                    <NewsCard article={{ ...article, category: 'Deportes' }} index={i} />
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
