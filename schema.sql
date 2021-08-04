DROP DATABASE  IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
	ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role(
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    primary key (id)
);

CREATE TABLE employee(
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id VARCHAR(30),
    manager_id INT,
    PRIMARY KEY (id)
);

INSERT INTO department(name)
VALUES("HR"), ("TECH"), ("Admin"), ("Management");

INSERT INTO role(title, salary, department_id)
VALUES("Director", 100000, 1), ("Office Manager", 75000, 2), ("Web Dev", 80000, 3), ("Intern", 45000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Joe", "Blow", "Director", null), ("Rhonda", "Jones", "Office Manager", 1), ("Black", "Rob", "Web Dev", null ), ("Mike", "Tyson", "Intern", null);