import React from 'react';

// Ícono Colombia — mapa estilizado con estrella
export const IconColombia = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8 2 4 5 4 9c0 5 8 13 8 13s8-8 8-13c0-4-4-7-8-7z" fill="currentColor" opacity="0.2"/>
        <path d="M12 2C8 2 4 5 4 9c0 5 8 13 8 13s8-8 8-13c0-4-4-7-8-7z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="9" r="2.5" fill="currentColor"/>
    </svg>
);

// Ícono Internacional — globo con líneas
export const IconInternacional = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="4" ry="9" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="3" y1="15" x2="21" y2="15" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

// Ícono Política — columnas de edificio
export const IconPolitica = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="19" width="20" height="2" rx="1" fill="currentColor"/>
        <rect x="4" y="10" width="3" height="9" fill="currentColor" opacity="0.7"/>
        <rect x="10.5" y="10" width="3" height="9" fill="currentColor" opacity="0.7"/>
        <rect x="17" y="10" width="3" height="9" fill="currentColor" opacity="0.7"/>
        <path d="M2 10 L12 3 L22 10 Z" fill="currentColor"/>
    </svg>
);

// Ícono Economía — gráfica de barras con flecha
export const IconEconomia = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="14" width="4" height="7" rx="1" fill="currentColor" opacity="0.6"/>
        <rect x="10" y="9" width="4" height="12" rx="1" fill="currentColor" opacity="0.8"/>
        <rect x="17" y="5" width="4" height="16" rx="1" fill="currentColor"/>
        <path d="M3 8 L9 5 L15 7 L21 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 2 L21 2 L21 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

// Ícono Deportes — balón de fútbol
export const IconDeportes = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 3 L12 7 M12 17 L12 21 M3 12 L7 12 M17 12 L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <polygon points="12,7 15,10 14,14 10,14 9,10" stroke="currentColor" strokeWidth="1.2" fill="currentColor" opacity="0.3"/>
    </svg>
);

// Ícono Tecnología — chip/circuito
export const IconTecnologia = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="9" y="9" width="6" height="6" rx="1" fill="currentColor" opacity="0.4"/>
        <line x1="9" y1="4" x2="9" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="4" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="15" y1="4" x2="15" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="9" y1="17" x2="9" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="17" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="15" y1="17" x2="15" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="4" y1="9" x2="7" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="4" y1="12" x2="7" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="4" y1="15" x2="7" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="17" y1="9" x2="20" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="17" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="17" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

// Ícono Entretenimiento — claqueta de cine
export const IconEntretenimiento = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="8" width="20" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 11 L22 11" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 3 L5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 3 L10 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17 3 L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M2 8 L22 8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 15 L15 17.5 L10 20 Z" fill="currentColor"/>
    </svg>
);

// Ícono Ciencia — átomo
export const IconCiencia = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
        <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)"/>
    </svg>
);

// Ícono Salud — cruz médica con corazón
export const IconSalud = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21 C12 21 3 15 3 9 C3 6.2 5.2 4 8 4 C9.8 4 11.4 5 12 6.4 C12.6 5 14.2 4 16 4 C18.8 4 21 6.2 21 9 C21 15 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.2"/>
        <line x1="12" y1="8" x2="12" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

// Ícono Inicio — casa moderna
export const IconInicio = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12 L12 4 L21 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 10 L5 20 L10 20 L10 15 L14 15 L14 20 L19 20 L19 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
