const fs = require("fs");
const assert = require("assert");

const Auth = require("./Auth/route.js");
const Blog = require("./Data/blog.js");
const FileStore = require("./Data/file-store.js");
const Services = require("./Services");

const test = async ctx => {
  try {
    ctx.response.status = 200;
    ctx.response.type = "application/json";
    ctx.response.body = {
      text: `it's working still`,
    };
  } catch (e) {
    console.error(e);
    ctx.response.status = 400;
    ctx.response.type = "application/json";
    ctx.response.body = {
      text: `it's not working`,
    };
  }
};

const api = {
  test,
  login: Auth.login,
  verifyToken: Auth.verifyToken,
  getNamedData: Blog.getNamedData,
  listBlogItems: Blog.listBlogItems,
  getItem: Blog.getItem,
  saveEntry: Blog.saveEntry,
  uploadFile: FileStore.uploadFile,
};

module.exports = api;
