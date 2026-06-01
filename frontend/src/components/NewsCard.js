import React from 'react';
import { Clock, ExternalLink } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import './NewsCard.css';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80';

const formatDate = (dateStr) => {
    if (!dateStr) return '';
    try {
        return formatDistanceToNow(new Date(dateStr), { addSuffix: true, locale: es });
    } catch {
        return '';
    }
};

const NewsCard = ({ article, variant = 'default', index = 0 }) => {
    if (!article) return null;

    const { title, description, urlToImage, publishedAt, source, url, category } = article;
    const image = urlToImage || DEFAULT_IMAGE;
    const delay = `${index * 0.08}s`;

    if (variant === 'featured') {
        return (
            <div className="news-card featured" style={{ animationDelay: delay }}>
                <div className="card-image-wrap">
                    <img src={image} alt={title} onError={(e) => { e.target.src = DEFAULT_IMAGE; }} />
                    <div className="card-overlay" />
                    {category && <span className="card-category">{category}</span>}
                </div>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    {description && <p className="card-desc">{description}</p>}
                    <div className="card-meta">
                        <span className="card-source">{source?.name || 'NotiCol'}</span>
                        <span className="card-time"><Clock size={12} />{formatDate(publishedAt)}</span>
                    </div>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="card-link">
                        Leer más <ExternalLink size={14} />
                    </a>
                </div>
            </div>
        );
    }

    if (variant === 'horizontal') {
        return (
            <div className="news-card horizontal" style={{ animationDelay: delay }}>
                <div className="card-image-wrap small">
                    <img src={image} alt={title} onError={(e) => { e.target.src = DEFAULT_IMAGE; }} />
                    {category && <span className="card-category small">{category}</span>}
                </div>
                <div className="card-body">
                    <h4 className="card-title sm">{title}</h4>
                    <div className="card-meta">
                        <span className="card-source">{source?.name || 'NotiCol'}</span>
                        <span className="card-time"><Clock size={11} />{formatDate(publishedAt)}</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="news-card default" style={{ animationDelay: delay }}>
            <div className="card-image-wrap">
                <img src={image} alt={title} onError={(e) => { e.target.src = DEFAULT_IMAGE; }} />
                {category && <span className="card-category">{category}</span>}
            </div>
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                {description && <p className="card-desc">{description}</p>}
                <div className="card-meta">
                    <span className="card-source">{source?.name || 'NotiCol'}</span>
                    <span className="card-time"><Clock size={12} />{formatDate(publishedAt)}</span>
                </div>
                <a href={url} target="_blank" rel="noopener noreferrer" className="card-link">
                    Leer más <ExternalLink size={14} />
                </a>
            </div>
        </div>
    );
};

export default NewsCard;
