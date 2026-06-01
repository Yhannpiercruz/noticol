const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const newsRoutes = require('./routes/newsRoutes');
app.use('/api/news', newsRoutes);

// Test DB Connection
db.query('SELECT 1')
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Database connection failed:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
