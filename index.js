const express = require("express");
const path = require('path');
const app = express();
const pool = require('./config/db');
const {registerUser, loginUser} = require('./controllers/authController.js')
const router = require('./routes/index.js')

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router); 

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'reg.html'));
})

app.get('/reg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'reg.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});