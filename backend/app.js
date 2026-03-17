const express = require('express');
const mongoose = require('mongoose');

const app = express();

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

mongoose.connect(`mongodb://${user}:${pass}@mongo:27017/mydb?authSource=admin`)
  .then(() => console.log("DB connected"));

app.get('/', (req, res) => {
  res.send("Backend Working");
});

app.listen(3000);