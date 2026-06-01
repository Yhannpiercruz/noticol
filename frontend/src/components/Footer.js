import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import NotiColLogo from './NotiColLogo';
import './Footer.css';

const Footer = () => {
    const categories = [
        'Colombia', 'Internacional', 'Política', 'Economía',
        'Deportes', 'Tecnología', 'Entretenimiento', 'Ciencia', 'Salud'
    ];

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand */}
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <NotiColLogo size={48} />
                                <div>
                                    <span className="footer-logo-text">NotiCol</span>
                                    <span className="footer-logo-sub">Noticias 24/7</span>
                                </div>
                            </div>
                            <p className="footer-desc">
                                Tu portal de noticias de Colombia y el mundo. Información actualizada, veraz y oportuna las 24 horas del día.
                            </p>
                        </div>

                        {/* Categories */}
                        <div className="footer-col">
                            <h4 className="footer-col-title">Categorías</h4>
                            <ul className="footer-links">
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <Link to={`/category/${cat.toLowerCase()}`}>{cat}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer-col">
                            <h4 className="footer-col-title">Contacto</h4>
                            <ul className="footer-contact-list">
                                <li><MapPin size={15} /> Bogotá, Colombia</li>
                                <li>
                                    <Phone size={15} />
                                    <a href="tel:+573203171839">+57 320 317 1839</a>
                                </li>
                                <li>
                                    <Mail size={15} />
                                    <a href="mailto:yhannpiercruz@gmail.com">yhannpiercruz@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>© {new Date().getFullYear()} NotiCol — Todos los derechos reservados.</p>
                    <p>Desarrollado con ❤️ en Colombia</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
