const { body, param } = require('express-validator');
const mongoose = require('mongoose');
const validate = require('../middleware/validate');
const { Article } = require('../model');

exports.createArticle = validate([
  body('article.title').notEmpty().withMessage('标题不能为空'),
  body('article.description').notEmpty().withMessage('描述不能为空'),
  body('article.body').notEmpty().withMessage('内容不能为空')
]);

exports.getArticle = validate([
  param('slug').custom(async (value) => {
    //! 同步异步二选一即可 
    if(!mongoose.isValidObjectId(value)) {
      // 异步
      return Promise.reject('文章ID类型错误');
      // 同步：失败
      // throw new Error('文章ID类型错误');
    }
    // 同步：成功
    // return true;
  })
]);
