const util = require('util');

module.exports = () => {
  return async (error, req, res, next) => {
    console.error(error.stack);
    // error 上的错误信息都在原型上，JSON 只能解析对象本身上的属性，
    // 所以直接返回就得到空对象即 {}，因此需要 util.format 做转换
    res.status(500).json({
      error: util.format(error)
    });
  }
}