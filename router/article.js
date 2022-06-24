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
router.get('/:slug', getArticles);

/**
 * Create Article
 */
router.post('/', createArticles);

/**
 * Update Article
 */
 router.put('/:slug', updateArticles);

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