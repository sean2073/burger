### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_Name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date timestamp NOT NULL,
	PRIMARY KEY (id)
);