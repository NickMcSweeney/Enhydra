"use strict";
const Auth = require("./Auth/route.js");
const Blog = require("./Data/blog.js");
const FileStore = require("./Data/file-store.js");
const Services = require("./Services");

const api = {
  login: Auth.login,
};

module.exports = {
  Auth,
  Blog,
  FileStore,
};
