import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { Sun, Moon, Search, Menu, X } from 'lucide-react';
import NotiColLogo from './NotiColLogo';
import {
    IconInicio, IconColombia, IconInternacional, IconPolitica,
    IconEconomia, IconDeportes, IconTecnologia, IconEntretenimiento,
    IconCiencia, IconSalud
} from './CategoryIcons';
import './Navbar.css';

const categories = [
    { label: 'Inicio', path: '/', icon: IconInicio },
    { label: 'Colombia', path: '/category/colombia', icon: IconColombia },
    { label: 'Internacional', path: '/category/internacional', icon: IconInternacional },
    { label: 'Política', path: '/category/politica', icon: IconPolitica },
    { label: 'Economía', path: '/category/economia', icon: IconEconomia },
    { label: 'Deportes', path: '/category/deportes', icon: IconDeportes },
    { label: 'Tecnología', path: '/category/tecnologia', icon: IconTecnologia },
    { label: 'Entretenimiento', path: '/category/entretenimiento', icon: IconEntretenimiento },
    { label: 'Ciencia', path: '/category/ciencia', icon: IconCiencia },
    { label: 'Salud', path: '/category/salud', icon: IconSalud },
];

const Navbar = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            setIsMenuOpen(false);
            setSearchQuery('');
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-topbar">
                    <Link to="/" className="logo-container">
                        <NotiColLogo size={44} />
                        <div className="logo-texts">
                            <span className="logo-text">NotiCol</span>
                            <span className="logo-subtext">Noticias 24/7</span>
                        </div>
                    </Link>

                    <div className="search-bar-desktop">
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Buscar noticias, temas, fuentes..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type="submit">
                                <Search size={16} />
                                Buscar
                            </button>
                        </form>
                    </div>

                    <div className="navbar-actions">
                        <button onClick={toggleTheme} className="theme-toggle" title="Cambiar tema">
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Menú"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        {categories.map(({ label, path, icon: Icon }) => (
                            <li key={path}>
                                <Link
                                    to={path}
                                    className={location.pathname === path ? 'active' : ''}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Icon size={15} />
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
