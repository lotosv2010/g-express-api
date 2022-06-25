const express = require('express');
const {
  login,
  register,
  getCurrentUser,
  updateUser
} = require('../controller/user');
const userValidator = require('../validator/user');

const router = express.Router();


/**
 * Authentication
 */
router.post('/users/login', userValidator.login, login);

/**
 * Registration
 */
router.post('/users', userValidator.register, register);

/**
 * Get Current User
 */
router.get('/user', getCurrentUser);

/**
 * Update User
 */
router.put('/user', updateUser);

module.exports = router;