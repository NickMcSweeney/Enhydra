const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const serve = require("koa-static");
const mount = require("koa-mount");
const assert = require("assert");

const dotenv = require("dotenv").config();
if (dotenv.error) return console.error(dotenv.error);
const ENV = process.env;

const backend = new Koa();
const frontend = new Koa();
const route = new Router();

const myRoutes = require("./routes.js");

console.log(`Starting ${ENV.APP_NAME} server @ ${ENV.BASE_URL}`);

route.post("/login", myRoutes.login);
route.post("/verifyToken", myRoutes.verifyToken);
route.post("/blog/addItem", myRoutes.saveEntry);
route.post("/blog/getItem", myRoutes.getItem);
route.get("/blog/listItems", myRoutes.listBlogItems);

route.get("/test/", myRoutes.test);
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
