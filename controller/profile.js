// Get Profile
exports.getProfile = async (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
}

// Follow user
exports.followUser = async (req, res, next) => {
  try {
    JSON.parse('test');
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
}

// Unfollow user
exports.unfollowUser = async (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
}