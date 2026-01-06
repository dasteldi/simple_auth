const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const {registerUser, loginUser} = require('../controllers/authController.js')

router.get('/auth', authenticateToken, (req, res) => {
  res.json({ 
    message: 'Authenticated successfully',
    user: req.user 
  });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const result = await loginUser(username, password, req, res)
})

router.post('/reg', async(req, res) => {
  const { username, email, password} = req.body;
  const result = await registerUser(username, email, password, req, res);
})

module.exports = router;