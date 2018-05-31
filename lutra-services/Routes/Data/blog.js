const fs = require("fs");
const assert = require("assert");

const { loadDB } = require("../../Libraries/Utils");

module.exports = {
  getNamedData: async (ctx, item) => {
    try {
      const db = await loadDB();
      const Lutra = db.collection("lutra");
      const data = await Lutra.find({ item }).toArray();
      ctx.response.body = { data };
    } catch (e) {
      console.error(e);
    } finally {
      ctx.response.status = 200;
      ctx.response.type = "application/json";
      console.log("Finished read test", ctx.response);
      return ctx.response;
    }
  },

  listBlogItems: async ctx => {
    try {
      const db = await loadDB();
      const blogDB = db.collection("blog");
      const data = await blogDB.find({}).toArray();

      const blogList = data[0];
      let body = new Object();
      body.list = blogList.list;
      body = JSON.stringify(body);

      ctx.response.body = body;
      ctx.response.message = "Sucess - list of items!";
      ctx.response.status = 200;
      ctx.response.type = "application/json";

      return ctx.response;
    } catch (e) {
      console.error(e);

      ctx.response.type = "application/json";
      ctx.response.status = 400;
      ctx.response.message = "Absolute failure - something went teribly wrong";

      return ctx.response;
    }
  },
  getItem: async ctx => {
    try {
      const item = ctx.request.body.content;
      console.log("hey guys??", item);

      const db = await loadDB();
      const blogDB = db.collection("blog");
      const data = await blogDB.find({}).toArray();

      // console.log(newItem);
      let body = new Object();
      data.forEach((key, i) => {
        console.log(key[item]);
        if (key[item]) {
          body.story = key[item];
        }
      });
      body = JSON.stringify(body);

      ctx.response.body = body;
      ctx.response.message = "Sucess - list of items!";
      ctx.response.status = 200;
      ctx.response.type = "application/json";

      return ctx.response;
    } catch (e) {
      console.error(e);

      ctx.response.type = "application/json";
      ctx.response.status = 400;

      return ctx.response;
    }
  },
  saveEntry: async ctx => {
    const token = ctx.request.body.jwt;
    const cert = fs.readFileSync("./cert/private/key.pem");
    let decoded = null;
    try {
      decoded = await jwt.verify(token, cert);
      const db = await loadDB();
      const adminDB = db.collection("admin");
      const data = await adminDB.find({}).toArray();
      let username = "";
      let password = "";
      data.forEach(obj => {
        if (obj.username) {
          username = obj.username;
        } else if (obj.password) {
          password = obj.password;
        }
      });

      if (decoded[username] === password) {
        const blogDB = db.collection("blog");
        const data = await blogDB.find({}).toArray();
        const listItems = data[0];
        let newListItems = [];
        const entryTitle = ctx.request.body.entry.title;
        const entrySubtitle = ctx.request.body.entry.subtitle;
        const entryBody = ctx.request.body.entry.body;
        listItems.list.forEach(item => {
          newListItems.push(item);
        });
        if (newListItems.indexOf(entryTitle) < 0) {
          newListItems.push(entryTitle);
        } else {
          throw "Duplicate title";
        }
        console.log({ list: listItems.list }, { list: newListItems });
        let res = await blogDB.update(
          { list: listItems.list },
          { list: newListItems }
        );
        console.log(res.result);
        let newEntry = {};
        newEntry[entryTitle] = {
          title: entryTitle,
          subtitle: entrySubtitle,
          body: entryBody,
        };
        res = await blogDB.insert(newEntry);
        console.log(res.result);

        let body = new Object();
        body.stuff = await blogDB.find({}).toArray();
        body = JSON.stringify(body);

        ctx.response.body = body;
        ctx.response.status = 200;
        ctx.response.message = "Success - added new entry";
        ctx.response.type = "application/json";

        return ctx.response;
      } else {
        throw "falure - no match for account in db";
      }
    } catch (e) {
      console.error(e);
      ctx.response.type = "application/json";
      ctx.response.status = 400;
      ctx.response.message = e;
      return ctx.response;
    }
  },
};
