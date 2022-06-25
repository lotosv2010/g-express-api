const { User } = require('../model');

// Authentication
exports.login = async (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
}

// Registration
exports.register = async (req, res, next) => {
  try {
    // todo：4 Create
    // 1.获取请求体数据
    // 2.数据验证
    // 2.1 基本数据验证
    // 2.2 业务数据验证
    // 3.验证通过，将数据保存到数据库
    let user = await User.create(req.body.user);
    user = user.toJSON();
    Reflect.deleteProperty(user, 'password');
    // 4.发送成功响应
    res.status(201).json({
      user
    });
  } catch (error) {
    next(error);
  }
}

// Get Current User
exports.getCurrentUser = async (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
}

// Update User
exports.updateUser = async (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
}
