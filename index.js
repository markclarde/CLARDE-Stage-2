const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// To run this NodeJS application, use the command: node app.js

// Query to create the database/schema
// CREATE DATABASE sysdev_recruitment;

// Query to create the table
// USE sysdev_recruitment;
// CREATE TABLE programming_languages (
//     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     favorites VARCHAR(255)
// );

// Query to insert JavaScript to programming_languages column
// INSERT INTO programming_languages (favorites) VALUES ('JavaScript');