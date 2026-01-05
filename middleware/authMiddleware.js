const jwt = require('jsonwebtoken');
require('dotenv').config(); 

const JWT_SECRET = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Токен доступа не предоставлен'
      });
    }
    
    const decoded = jwt.verify(token, JWT_SECRET);
    
    req.user = decoded;
    next();
    
  } catch (error) {
    let statusCode = 403;
    let message = 'Недействительный токен';
    
    if (error.name === 'TokenExpiredError') {
      statusCode = 401;
      message = 'Токен истек';
    } else if (error.name === 'JsonWebTokenError') {
      message = 'Неверный формат токена';
    }
    
    return res.status(statusCode).json({
      success: false,
      message,
      error: error.name
    });
  }
};

module.exports = authenticateToken; // в данном примере проверка токена нигде не используется, это заготовка на будущее