const express = require("express");
const path = require('path');
const app = express();
const pool = require('./config/db');
const {registerUser, loginUser} = require('./controllers/authController.js')
const router = require('./routes/index.js')

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

app.use('/api', router); 

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});