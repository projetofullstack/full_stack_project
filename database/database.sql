DROP DATABASE IF EXISTS fullstack_database;
CREATE DATABASE IF NOT EXISTS fullstack_database;
SHOW DATABASES;

DROP TABLE IF EXISTS fullstack_database.users;
CREATE TABLE fullstack_database.users(
    user_id INT NOT NULL AUTO_INCREMENT,
    user VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(12) NOT NULL,
	PRIMARY KEY(user_id)
) engine = InnoDB;