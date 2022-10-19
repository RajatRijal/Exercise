drop database if exists todo;

create database todo;

use todo;

create table task (
    id int primary key auto_increment,
     description varchar(255) not null
);

Insert into task (description) values ('My test tasks');
Insert into task (description) values ('My other test task');