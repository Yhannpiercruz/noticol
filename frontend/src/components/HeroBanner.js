import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, TrendingUp } from 'lucide-react';
import './HeroBanner.css';

const HeroBanner = () => {
    return (
        <section className="hero-banner">
            {/* Background blobs */}
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />

            <div className="container hero-banner-inner">
                {/* Left content */}
                <motion.div
                    className="hero-text-side"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Zap size={14} />
                        Noticias en tiempo real
                    </motion.div>

                    <motion.h1
                        className="hero-headline"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                    >
                        Tu fuente de
                        <span className="hero-highlight"> noticias</span>
                        <br />Colombia y el mundo
                    </motion.h1>

                    <motion.p
                        className="hero-subtext"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        Información actualizada 24/7. Política, economía, deportes, tecnología y más — todo en un solo lugar.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <a href="#latest" className="btn-primary">
                            <TrendingUp size={16} />
                            Ver noticias
                        </a>
                        <a href="#categories" className="btn-secondary">
                            <Globe size={16} />
                            Explorar categorías
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="hero-stats"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        {[
                            { num: '24/7', label: 'Actualización' },
                            { num: '9+', label: 'Categorías' },
                            { num: '100%', label: 'Gratis' },
                        ].map((s, i) => (
                            <div key={i} className="stat-item">
                                <span className="stat-num">{s.num}</span>
                                <span className="stat-label">{s.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right illustration */}
                <motion.div
                    className="hero-illustration-side"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                >
                    {/* Main phone/news card */}
                    <motion.div
                        className="news-phone-card"
                        animate={{ y: [0, -16, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <div className="phone-header">
                            <div className="phone-dot red" />
                            <div className="phone-dot yellow" />
                            <div className="phone-dot green" />
                        </div>
                        <div className="phone-news-label">NEWS</div>
                        <div className="phone-line full" />
                        <div className="phone-line medium" />
                        <div className="phone-blocks">
                            <div className="phone-block red-block" />
                            <div className="phone-block teal-block" />
                        </div>
                        <div className="phone-line short" />
                    </motion.div>

                    {/* Floating info card */}
                    <motion.div
                        className="floating-card info-card"
                        animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    >
                        <div className="info-card-icon">📰</div>
                        <div>
                            <div className="info-card-title">INFORMACIÓN</div>
                            <div className="info-card-line" />
                            <div className="info-card-line short" />
                        </div>
                    </motion.div>

                    {/* Floating badge */}
                    <motion.div
                        className="floating-card breaking-card"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    >
                        <Zap size={14} fill="currentColor" />
                        Breaking News
                    </motion.div>

                    {/* Globe icon floating */}
                    <motion.div
                        className="floating-globe"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                        <Globe size={32} />
                    </motion.div>

                    {/* Decorative circles */}
                    <div className="deco-circle c1" />
                    <div className="deco-circle c2" />
                    <div className="deco-circle c3" />
                </motion.div>
            </div>

            {/* Wave bottom */}
            <div className="hero-wave">
                <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
                    <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
                </svg>
            </div>
        </section>
    );
};

export default HeroBanner;
