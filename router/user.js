const express = require('express');
const {
  login,
  registration,
  getCurrentUser,
  updateUser
} = require('../controller/user');

const router = express.Router();

/**
 * Authentication
 */
router.post('/users/login', login);

/**
 * Registration
 */
router.post('/users', registration);

/**
 * Get Current User
 */
router.get('/user', getCurrentUser);

/**
 * Update User
 */
router.put('/user', updateUser);

module.exports = router;