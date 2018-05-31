const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const serve = require("koa-static");
const mount = require("koa-mount");
const fs = require("fs");
const assert = require("assert");
const path = require("path");

const PATH = path.join(__dirname, "../amotken-security/");

const dotenv = require("dotenv").config({ path: PATH + ".env" });
if (dotenv.error) return console.error(dotenv.error);
const ENV = process.env;

console.log("server", ENV.PWD);

const backend = new Koa();
const frontend = new Koa();
const route = new Router();

const myRoutes = require("./Routes");

console.log(myRoutes);

console.log(`Starting ${ENV.APP_NAME} server @ ${ENV.BASE_URL}`);

route.post("/login", myRoutes.Auth.login);
route.post("/verifyToken", myRoutes.Auth.verifyToken);
route.post("/blog/addItem", myRoutes.Data.saveEntry);
route.post("/blog/getItem", myRoutes.Data.getItem);
route.get("/blog/listItems", myRoutes.Data.listBlogItems);

route.get("/test/", myRoutes.Data.test);
// route.get("/readAll/", myRoutes.readFromDb);
// route.get("/getNamedData/:item", myRoutes.getNamedData);
//
// route.post("/createUser/", myRoutes.createUser);
// route.post("/writeDbEncrypt/", myRoutes.writeDbEncrypt);
// route.post("/writeDb/", myRoutes.addToDb);

backend.use(cors());
backend.use(bodyParser());
backend.use(route.routes());

frontend.use(mount("/", serve(ENV.SITE_PATH)));

// start the server
backend.listen(ENV.SERVER_PORT, ENV.SERVER_IP);
console.log("Backend started");

frontend.listen(ENV.SITE_PORT, ENV.SITE_IP);
console.log("Frontend started");
