DROP DATABASE IF EXISTS progettoFutura;

CREATE DATABASE progettoFutura;
USE progettoFutura;

CREATE TABLE orders (
	id INT AUTO_INCREMENT PRIMARY KEY,
	cliente VARCHAR(255) NOT NULL,
	prodotto VARCHAR(255) NOT NULL,
	quantita INT NOT NULL,
	data_ordine DATE NOT NULL
);