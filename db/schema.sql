CREATE DATABASE burgers_db;
use burgers_db;

CREATE TABLE IF NOT EXISTS burgers(
    id int(11) PRIMARY KEY auto_increment not null; 
    burger_name varChar(30) not null; 
    devoured boolean(1); 
    timestamp NOT NULL,
);
