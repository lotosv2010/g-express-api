const { User } = require('../model');
const jwt = require('../util/jwt');
const { jwtSecret } = require('../config/config.default');

// Authentication
exports.login = async (req, res, next) => {
  try {
    const user = req.user.toJSON();
    // 生产token
    const token = await jwt.sign({
      userId: user._id
    }, jwtSecret, {
      expiresIn: '7d'
    });
    Reflect.deleteProperty(user, 'password');
    
    res.status(200).json({
      user,
      token
    });
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
    res.status(200).json({
      user: req.user
    });
  } catch (error) {
    next(error);
  }
}

// Update User
exports.updateUser = async (req, res, next) => {
  try {
    const { _id } = req.user ?? {};
    if(req?.user) {
      const ret = await User.updateOne({ _id }, {$set: {
        ...req.body.user,
        updatedAt: new Date()
      }});
      const user = await User.findById(_id, { __v: 0 });
      res.status(200).json({
        user
      });
    }
  } catch (error) {
    next(error);
  }
}
