const mongoose = require('mongoose');
const baseModel = require('./base');
const md5 = require('../util/md5');

// todo：2 Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  ...baseModel,
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    set: value => md5(value)
  },
  bio: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  },
});

module.exports = UserSchema;