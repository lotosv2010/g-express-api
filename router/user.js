const express = require('express');
const {
  login,
  register,
  getCurrentUser,
  updateUser
} = require('../controller/user');
const userValidator = require('../validator/user');
const auth = require('../middleware/auth');

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
router.get('/user', auth, getCurrentUser);

/**
 * Update User
 */
router.put('/user', auth, updateUser);

module.exports = router;