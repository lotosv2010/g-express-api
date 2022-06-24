const express = require('express');

const router = express.Router();

/**
 * List Articles
 */
router.get('/', (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
});

/**
 * Feed Articles
 */
router.get('/feed', (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
});

/**
 * Get Article
 */
router.get('/:slug', (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
});

/**
 * Create Article
 */
router.post('/', (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
});

/**
 * Update Article
 */
 router.put('/:slug', (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
});

/**
 * Delete Article
 */
 router.delete('/:slug', (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
});

/**
 * Add Comments to an Article
 */
 router.post('/:slug/comments', (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
});

/**
 * Get Comments from an Article
 */
 router.get('/:slug/comments', (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
});

/**
 * Delete Comment
 */
 router.delete('/:slug/comments/:id', (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
});

/**
 * Favorite Article
 */
 router.post('/:slug/favorite', (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
});

/**
 * Unfavorite Article
 */
 router.delete('/:slug/favorite', (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;