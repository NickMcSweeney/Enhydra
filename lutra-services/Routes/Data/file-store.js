const fs = require("fs");
const assert = require("assert");

const { loadDB } = require("../../Libraries/Utils");
const { saveFile, removeFile, listAll } = require("../../Libraries/Data");

module.exports = {
  uploadFile: async (ctx, item) => {
    try {
      const db = await loadDB();
      const Files = db.collection("files");
    } catch (e) {
      console.error(e);
    } finally {
    }
  },
};
