const express = require('express');

const router = express.Router();

/**
 * Get Tags
 */
 router.get('/', (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;