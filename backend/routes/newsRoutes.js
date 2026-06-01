const express = require('express');
const router = express.Router();
const newsService = require('../services/newsService');

// Get general news
router.get('/', async (req, res) => {
    try {
        const news = await newsService.fetchNews('everything', {
            q: 'noticias OR colombia OR mundo OR política OR economía',
            language: 'es',
            sortBy: 'publishedAt',
            pageSize: 20
        });
        res.json(news);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener noticias' });
    }
});

// Search — MUST be before /:category
router.get('/search', async (req, res) => {
    try {
        const { q } = req.query;
        if (!q) return res.status(400).json({ error: 'Parámetro q requerido' });
        const news = await newsService.fetchNews('everything', {
            q,
            language: 'es',
            sortBy: 'publishedAt',
            pageSize: 20
        });
        res.json(news);
    } catch (err) {
        res.status(500).json({ error: 'Error en la búsqueda' });
    }
});

// Colombia
router.get('/colombia', async (req, res) => {
    try {
        const news = await newsService.fetchNews('everything', {
            q: 'colombia',
            language: 'es',
            sortBy: 'publishedAt',
            pageSize: 20
        });
        res.json(news);
    } catch (err) {
        res.status(500).json({ error: 'Error' });
    }
});

// Internacional
router.get('/internacional', async (req, res) => {
    try {
        const news = await newsService.fetchNews('everything', {
            q: 'internacional OR mundo OR global',
            language: 'es',
            sortBy: 'publishedAt',
            pageSize: 20
        });
        res.json(news);
    } catch (err) {
        res.status(500).json({ error: 'Error' });
    }
});

// By category
router.get('/:category', async (req, res) => {
    try {
        const { category } = req.params;
        const queryMap = {
            deportes: 'deportes OR fútbol OR tenis OR ciclismo',
            tecnologia: 'tecnología OR inteligencia artificial OR smartphone OR software',
            economia: 'economía OR finanzas OR mercado OR bolsa OR negocios',
            politica: 'política OR gobierno OR congreso OR elecciones',
            entretenimiento: 'entretenimiento OR cine OR música OR series OR farándula',
            ciencia: 'ciencia OR investigación OR descubrimiento OR espacio',
            salud: 'salud OR medicina OR enfermedad OR bienestar',
        };
        const q = queryMap[category] || category;
        const news = await newsService.fetchNews('everything', {
            q,
            language: 'es',
            sortBy: 'publishedAt',
            pageSize: 20
        });
        res.json(news);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener noticias por categoría' });
    }
});

module.exports = router;
