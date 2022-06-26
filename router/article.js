const express = require('express');
const {
  getListArticles,
  feedArticles,
  getArticles,
  createArticles,
  updateArticles,
  deleteArticles,
  addComments,
  getComments,
  deleteComments,
  favoriteArticle,
  unfavoriteArticle
} = require('../controller/article');
const articleValidator = require('../validator/article');
const auth = require('../middleware/auth');

const router = express.Router();

/**
 * List Articles
 */
router.get('/', getListArticles);

/**
 * Feed Articles
 */
router.get('/feed', feedArticles);

/**
 * Get Article
 */
router.get('/:slug', articleValidator.getArticle, getArticles);

/**
 * Create Article
 */
router.post('/', auth, articleValidator.createArticle, createArticles);

/**
 * Update Article
 */
 router.put('/:slug', auth, articleValidator.updateArticle, updateArticles);

/**
 * Delete Article
 */
 router.delete('/:slug', deleteArticles);

/**
 * Add Comments to an Article
 */
 router.post('/:slug/comments', addComments);

/**
 * Get Comments from an Article
 */
 router.get('/:slug/comments', getComments);

/**
 * Delete Comment
 */
 router.delete('/:slug/comments/:id', deleteComments);

/**
 * Favorite Article
 */
 router.post('/:slug/favorite', favoriteArticle);

/**
 * Unfavorite Article
 */
 router.delete('/:slug/favorite', unfavoriteArticle);

module.exports = router;