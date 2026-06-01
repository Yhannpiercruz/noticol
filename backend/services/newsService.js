const axios = require('axios');
require('dotenv').config();

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

const fetchNews = async (endpoint, params = {}) => {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}`, {
            params: {
                apiKey: NEWS_API_KEY,
                ...params
            }
        });
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching news:', error.message);
        return [];
    }
};

module.exports = { fetchNews };
