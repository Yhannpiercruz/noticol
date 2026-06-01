const mysql = require('mysql2');
const dns = require('dns');
require('dotenv').config();

// Forzar a Node.js a resolver las direcciones DNS correctamente en entornos de producción
dns.setDefaultResultOrder('ipv4first');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();