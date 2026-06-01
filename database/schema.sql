CREATE DATABASE IF NOT EXISTS noticol;
USE noticol;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUM('admin', 'usuario') DEFAULT 'usuario',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE NOT NULL,
    descripcion TEXT
);

CREATE TABLE IF NOT EXISTS noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    contenido TEXT,
    imagen VARCHAR(255),
    fuente VARCHAR(100),
    autor VARCHAR(100),
    fecha_publicacion DATETIME,
    categoria_id INT,
    destacada BOOLEAN DEFAULT FALSE,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE SET NULL
);

-- Insertar categorías iniciales
INSERT IGNORE INTO categorias (nombre) VALUES 
('Colombia'), 
('Internacional'), 
('Política'), 
('Economía'), 
('Deportes'), 
('Tecnología'), 
('Entretenimiento'), 
('Ciencia'), 
('Salud');
