const express = require('express');
const {
  getProfile,
  followUser,
  unfollowUser
} = require('../controller/profile');

const router = express.Router();

/**
 * Get Profile
 */
router.get('/:username', getProfile);

/**
 * Follow user
 */
router.post('/:username/follow', followUser);

/**
 * Unfollow user
 */
router.delete('/:username/follow', unfollowUser);

module.exports = router;