const { Article, User } = require('../model');

// List Articles
exports.getListArticles = async (req, res, next) => {
  try {
    const { tag, author, favorited, limit = 10, offset = 0} = req.query;
    const filter = {};
    if(tag) {
      filter.tagList = tag
    }
    if(author) {
      const user = await User.findOne({ username: author});
      filter.author = user?._id;
    }
    const articles = await Article.find(filter)
      .skip(+offset)
      .limit(+limit)
      .sort({
        createAt: -1
      })
      .populate('author');
    const articleCount = await Article.countDocuments(filter);
    if(!articles) {
      return res.status(404).end();
    }
    res.status(200).json({
      articles,
      articleCount
    });
  } catch (error) {
    next(error);
  }
}

// Feed Articles
exports.feedArticles = async (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
}

// Get Article
exports.getArticles = async (req, res, next) => {
  try {
    const id = req.params.slug;
    const article = await Article.findById(id).populate('author');
    if(!article) {
      return res.status(404).end();
    }
    res.status(200).json({
      article
    });
  } catch (error) {
    next(error);
  }
}

// Create Article
exports.createArticles = async (req, res, next) => {
  try {
    const article = new Article({
      ...req.body.article,
      author: req.user._id
    })
    article.populate('author');
    await article.save();

    res.status(201).json({
      article
    });
  } catch (error) {
    next(error);
  }
}

// Update Article
exports.updateArticles = async (req, res, next) => {
  try {
    const bodyArticle = req.body.article;
    const article = req.article;
    article.title = bodyArticle.title ?? article.title;
    article.body = bodyArticle.body ?? article.body;
    article.description = bodyArticle.description ?? article.description;
    await article.save();
    res.status(200).json({
      article
    });
  } catch (error) {
    next(error);
  }
}

// Delete Article
exports.deleteArticles = async (req, res, next) => {
  try {
    const id = req.params.slug;
    await Article.deleteOne({ _id: id });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
}

// Add Comments to an Article
exports.addComments = async (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
}

// Get Comments from an Article
exports.getComments = async (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
}

// Delete Comment
exports.deleteComments = async (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
}

// Favorite Article
exports.favoriteArticle = async (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
}

// Unfavorite Article
exports.unfavoriteArticle = async (req, res, next) => {
  try {
    res.send(`${req.method} ${req.path}`);
  } catch (error) {
    next(error);
  }
}