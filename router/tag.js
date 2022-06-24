const express = require('express');
const { getTags } = require('../controller/tag');

const router = express.Router();

/**
 * Get Tags
 */
 router.get('/', getTags);

module.exports = router;