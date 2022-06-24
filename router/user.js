const express = require('express');

const router = express.Router();

/**
 * Authentication
 */
router.post('/users/login', (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
});

/**
 * Registration
 */
router.post('/users', (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
});

/**
 * Get Current User
 */
router.get('/user', (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
});

/**
 * Update User
 */
router.put('/user', (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;