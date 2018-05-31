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

const lutra = new Koa();
const lutris = new Koa();
const imaginarium = new Koa();
const route = new Router();

const myRoutes = require("./Routes");

console.log(`\nStarting ${ENV.APP_NAME} server @ ${ENV.BASE_URL}\n`);

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

lutra.use(cors());
lutra.use(bodyParser());
lutra.use(route.routes());

const IMAGINARIUM = path.join(__dirname, "../", ENV.IMAGINARIUM_PATH);
const LUTRIS = path.join(__dirname, "../", ENV.LUTRIS_PATH);

imaginarium.use(mount("/", serve(IMAGINARIUM)));
lutris.use(mount("/", serve(LUTRIS)));

// start the server
lutra.listen(ENV.LUTRA_PORT, ENV.LUTRA_IP);
console.log("Lutra started at: " + ENV.LUTRA_PORT);

imaginarium.listen(ENV.IMAGINARIUM_PORT, ENV.IMAGINARIUM_IP);
console.log("Frontend Imaginarium started at: " + ENV.IMAGINARIUM_PORT);

lutris.listen(ENV.LUTRIS_PORT, ENV.LUTRIS_IP);
console.log("Frontend Lutris started at: " + ENV.LUTRIS_PORT);
