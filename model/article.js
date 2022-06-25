const mongoose = require('mongoose');
const baseModel = require('./base');

const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
  ...baseModel,
  slug: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  tagList: {
    type: Array,
    required: true
  },
  favorited: {
    type: Boolean,
    default: false
  },
  favoritesCount: {
    type: Number,
    default: 0
  },
  author: {
    username: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    following: {
      type: Boolean,
      default: false
    },
  },
});

module.exports = ArticleSchema;