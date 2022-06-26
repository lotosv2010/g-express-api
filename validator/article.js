const { body } = require('express-validator');
const validate = require('../middleware/validate');
const { Article } = require('../model');

exports.createArticle = validate([
  body('article.title').notEmpty().withMessage('标题不能为空'),
  body('article.description').notEmpty().withMessage('描述不能为空'),
  body('article.body').notEmpty().withMessage('内容不能为空')
]);
