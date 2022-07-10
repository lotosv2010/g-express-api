const jwt = require('../util/jwt');
const { jwtSecret } = require('../config/config.default');
const { User } = require('../model');
// token 认证
module.exports = async (req, res, next) => {
  // 从请求头获取 token 数据
  let token = req.headers['authorization'];
  token = token ? token.split('Bearer ')[1] : null;
  if(!token) {
    return res.status(401).end();
  }
  try {
    // 验证 token 是否有效
    const decodeToken = await jwt.verify(token, jwtSecret);
    // 有效 --> 把用户信息读取出来挂在到 req 对象上
    req.user = await User.findById(decodeToken.userId, { __v: 0 });
    // 继续往后执行
    next();
  } catch (error) {
    console.error(error.stack);
    // 无效 --> 401 状态码
    return res.status(401).end();
  }
}