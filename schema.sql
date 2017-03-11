DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE scores (
  id int NOT NULL AUTO_INCREMENT,
  score integer NOT NULL,
  user varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
