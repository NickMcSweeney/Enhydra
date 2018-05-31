const jwt = require("jsonwebtoken");
const fs = require("fs");
const assert = require("assert");

const { loadDB } = require("../../Libraries/Utils");

async function login(ctx) {
  console.log("Starting Login...");
  try {
    const db = await loadDB();
    const adminDB = db.collection("admin");
    const data = await adminDB.find({}).toArray();

    let username = "";
    let password = "";
    data.forEach(obj => {
      if (obj.username) username = obj.username;
      else if (obj.password) password = obj.password;
    });
    console.log(
      `${username} vs ${ctx.request.body.username}`,
      `${password} vs ${ctx.request.body.password}`
    );
    if (username === ctx.request.body.username && password === ctx.request.body.password) {
      const cert = await fs.readFileSync("./cert/private/key.pem");
      let auth = {};
      auth[username] = password;

      const token = await jwt.sign(auth, cert);

      let body = new Object();
      body.sucess = true;
      body.jwt = token;
      body.auth = auth;
      body = JSON.stringify(body);

      ctx.response.body = body;
      ctx.response.status = 200;
      ctx.response.type = "application/json";

      console.log("Sucess ... Login Complete ... Return Values: ", ctx.response);

      return ctx.response;
    }
    throw "falure - no match for account in db";
  } catch (e) {
    console.error(e);

    let body = new Object();
    body.sucess = false;
    body = JSON.stringify(body);

    ctx.response.type = "application/json";
    ctx.response.body = body;
    ctx.response.status = 400;

    return ctx.response;
  }
}

async function verifyToken(ctx) {
  const token = ctx.request.body.token;
  const cert = fs.readFileSync("./cert/private/key.pem");
  let decoded = null;
  let auth = null;
  try {
    decoded = await jwt.verify(token, cert);
    const db = await loadDB();
    const adminDB = db.collection("admin");
    const data = await adminDB.find({}).toArray();
    let username = "";
    let password = "";
    data.forEach(obj => {
      if (obj.username) username = obj.username;
      else if (obj.password) password = obj.password;
    });

    if (decoded[username] === password) auth = true;
    else auth = false;
  } catch (e) {
    console.log(e);
  } finally {
    if (auth) {
      ctx.response.body = { sucess: auth };
      ctx.response.status = 200;
      ctx.response.type = "application/json";
      return ctx.response;
    }
    ctx.response.type = "application/json";
    ctx.response.body = { sucess: false };
    ctx.response.status = 400;
    return ctx.response;
  }
}

module.exports = {
  login,
  verifyToken,
};
