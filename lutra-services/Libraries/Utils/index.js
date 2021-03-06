"use strict";

const Mongo = require("mongodb");
const fs = require("fs");
const assert = require("assert");
const path = require("path");

const PATH = path.join(__dirname, "../../../amotken-security/");

const dotenv = require("dotenv").config({ path: PATH + ".env" });
if (dotenv.error) return console.error(dotenv.error);
const ENV = process.env;

const Mongodb = Mongo.MongoClient;

const databaseLoader = {
  loadDB: async () => {
    const url = `mongodb://${ENV.DB_ADMIN}:${
      ENV.ADMIN_CREDENTIALS
    }@localhost:27017/${ENV.DB_MAIN_ID}`;
    const db = await Mongodb.connect(url);

    return db;
  },
  loadReadDB: async database => {
    const url = `mongodb://${ENV.DB_READER}:${
      ENV.READER_CREDENTIALS
    }@localhost:27017/${ENV[database]}`;
    const db = await Mongodb.connect(url);

    return db;
  },
  loadWriteDB: async database => {
    const url = `mongodb://${ENV.DB_WRITER}:${
      ENV.WRITER_CREDENTIALS
    }@localhost:27017/${ENV[database]}`;
    const db = await Mongodb.connect(url);

    return db;
  },
};

module.exports = {
  loadDB: databaseLoader.loadDB,
};
