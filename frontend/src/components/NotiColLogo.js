import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const NotiColLogo = ({ size = 42 }) => {
    const ctx = useContext(ThemeContext);
    const darkMode = ctx?.darkMode || false;

    const arcBottom = darkMode ? '#ffffff' : '#1d3557';
    const innerBg   = darkMode ? '#1a1a2e' : '#ffffff';
    const textColor = darkMode ? '#ffffff' : '#1d3557';

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: 0, display: 'block' }}
            aria-label="NotiCol Logo"
        >
            {/* Arco superior — rojo */}
            <path
                d="M 50 5 A 45 45 0 0 1 95 50"
                stroke="#e63946"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
            />
            {/* Arco inferior — azul oscuro / blanco en dark */}
            <path
                d="M 95 50 A 45 45 0 1 1 50 5"
                stroke={arcBottom}
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
            />
            {/* Círculo interior */}
            <circle cx="50" cy="50" r="35" fill={innerBg} />
            {/* Texto NC */}
            <text
                x="50"
                y="64"
                fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif"
                fontSize="32"
                fontWeight="900"
                fill={textColor}
                textAnchor="middle"
                letterSpacing="-1"
            >
                NC
            </text>
        </svg>
    );
};

export default NotiColLogo;
