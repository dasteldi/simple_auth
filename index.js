const express = require("express");
const path = require('path');
const app = express();
const pool = require('./config/db');
const {registerUser, loginUser} = require('./controllers/userController.js')

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'reg.html'));
})

app.get('/reg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'reg.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
})

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const result = await loginUser(username, password, req, res)
})

app.post('/reg', async(req, res) => {
  const { username, email, password} = req.body;
  const result = await registerUser(username, email, password, req, res);
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});