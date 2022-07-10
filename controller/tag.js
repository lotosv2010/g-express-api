// Get Tags
exports.getTags = async (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
}