const { body } = require('express-validator');
const validate = require('../middleware/validate');
const { User } = require('../model');
const md5 = require('../util/md5');

//! 数据验证
exports.register = validate([
  //! 1.配置验证规则
  body('user.username')
    .notEmpty().withMessage('用户名不能为空')
    .bail() // 前面验证不通过就不往下继续
    .custom(async (username) => { // 自定义校验
      const ret = await User.findOne({ username });
      if (ret) {
        return Promise.reject('用户名已存在');
      }
    }),
  body('user.password').notEmpty().withMessage('密码不能为空'),
  body('user.email')
    .notEmpty().withMessage('邮箱不能为空')
    .isEmail().withMessage('邮箱格式不正确')
    .bail()
    .custom(async (email) => {
      const ret = await User.findOne({ email });
      if (ret) {
        return Promise.reject('邮箱已存在');
      }
    })
]);

exports.login = [
  validate([
    body('user.password').notEmpty().withMessage('密码不能为空'),
    body('user.email').notEmpty().withMessage('邮箱不能为空')
  ]),
  validate([
    body('user.email').custom(async (email, { req }) => {
      // await User.findOne({ email }, { password: 1, username: 1, email: 1, bio: 1, image: 1 }) 等价下面语句
      const ret = await User.findOne({ email }).select(['username', 'password', 'email', 'bio', 'image']);
      if (!ret) {
        return Promise.reject('用户不存在');
      }
      //! 将数据挂在到请求对象，后续的中间件可以直接使用
      req.user = ret;
    })
  ]),
  validate([
    body('user.password').custom(async (password, { req }) => {
      if (md5(password) !== req.user.password) {
        return Promise.reject('密码错误');
      }
    })
  ]),
];