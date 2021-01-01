USE book;

CREATE TABLE book1 (
id int AUTO_INCREMENT NOT NULL,
title varchar(100),
author VARCHAR (255),
pages varchar(255),
publisher varchar(50),
published_at varchar(50),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);