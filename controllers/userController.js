const data = require('../index.js')
const pool = require('../config/db.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); 

const generateToken = (username,email) => {
  return jwt.sign(
    {
      username: username,
      email: email
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
  );
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Токен отсутствует' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Неверный токен' });
  }
};

async function registerUser(username, email, password, req, res){
    if (!username || !email || !password){
        res.redirect("/error.html")
    } 
    const query = `
        INSERT INTO users_default (username, email, password)
        VALUES ($1, $2, $3)
    `;
    const values = [username, email, password];
    const result = await pool.query(query, values);
    const token = generateToken(username, email);

    res.json({
        reg: "true",
        token_jwt: token
    })
}

async function loginUser(username, password, req, res) {
    if (!username || !password){
        res.redirect('/error.html');
    }
    const query = `
        SELECT username, password
        FROM users_default 
        WHERE (username = $1 AND password = $2)
        LIMIT 1;
    `;
    const values = [username, password];
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
        res.redirect('/error.html');
    }
    if (!password){
        res.redirect('lox');
    }
    res.json({
        login: 'succesfully'
    })
}

module.exports = {
    registerUser,
    loginUser
};