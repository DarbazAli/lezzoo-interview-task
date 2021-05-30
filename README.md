# lezzoo-interview-task

## [Live app](https://lezzoo-admin-panel.herokuapp.com).

### DB Modeling

```
CREATE TABLE store(
	id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    logo VARCHAR(255) NOT NULL
);

CREATE TABLE category (
	id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    storeID INT(11) NOT NULL,
    FOREIGN KEY (storeID) REFERENCES store(id)
);

CREATE TABLE item (
	id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    price INT(11) NOT NULL,
    categoryID INT(11) NOT NULL,
    FOREIGN KEY (categoryID) REFERENCES category(id)
);

```
