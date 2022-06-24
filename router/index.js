const express = require('express');
const users = require('./user');
const article = require('./article');
const profile = require('./profile');
const tag = require('./tag');

const router = express.Router();

// !用户相关
router.use(users);

// ! 文章相关
router.use('/articles', article);

// ! 用户资料相关
router.use('/profiles', profile);

// ! 标签相关
router.use('/tags', tag);


module.exports = router;