import React from 'react';
import { Clock, ExternalLink, TrendingUp } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import './HeroSection.css';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80';

const formatDate = (dateStr) => {
    if (!dateStr) return '';
    try {
        return formatDistanceToNow(new Date(dateStr), { addSuffix: true, locale: es });
    } catch {
        return '';
    }
};

const HeroSection = ({ mainArticle, sideArticles = [] }) => {
    if (!mainArticle) return null;

    const { title, description, urlToImage, publishedAt, source, url, category } = mainArticle;
    const image = urlToImage || DEFAULT_IMAGE;

    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-grid">
                    {/* Main hero */}
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-main fade-in-up"
                    >
                        <div className="hero-image-wrap">
                            <img
                                src={image}
                                alt={title}
                                onError={(e) => { e.target.src = DEFAULT_IMAGE; }}
                            />
                            <div className="hero-gradient" />
                            <div className="hero-badges">
                                <span className="hero-badge breaking">
                                    <TrendingUp size={12} /> Destacado
                                </span>
                                {category && <span className="hero-badge category">{category}</span>}
                            </div>
                        </div>
                        <div className="hero-content">
                            <h1 className="hero-title">{title}</h1>
                            {description && <p className="hero-desc">{description}</p>}
                            <div className="hero-meta">
                                <span className="hero-source">{source?.name || 'NotiCol'}</span>
                                <span className="hero-time">
                                    <Clock size={13} />
                                    {formatDate(publishedAt)}
                                </span>
                            </div>
                            <span className="hero-cta">
                                Leer noticia completa <ExternalLink size={14} />
                            </span>
                        </div>
                    </a>

                    {/* Side articles */}
                    {sideArticles.length > 0 && (
                        <div className="hero-side fade-in-right">
                            <div className="side-header">
                                <span className="side-label">Más noticias</span>
                            </div>
                            <div className="side-list">
                                {sideArticles.slice(0, 4).map((article, i) => (
                                    <a
                                        key={i}
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="side-item"
                                        style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
                                    >
                                        <div className="side-img-wrap">
                                            <img
                                                src={article.urlToImage || DEFAULT_IMAGE}
                                                alt={article.title}
                                                onError={(e) => { e.target.src = DEFAULT_IMAGE; }}
                                            />
                                        </div>
                                        <div className="side-body">
                                            <h4 className="side-title">{article.title}</h4>
                                            <span className="side-time">
                                                <Clock size={11} />
                                                {formatDate(article.publishedAt)}
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
