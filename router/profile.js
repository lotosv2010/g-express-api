const express = require('express');

const router = express.Router();

/**
 * Get Profile
 */
router.get('/:username', (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
});

/**
 * Follow user
 */
router.post('/:username/follow', (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
});

/**
 * Unfollow user
 */
router.delete('/:username/follow', (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;