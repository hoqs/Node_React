const express = require("express");
const routes = express.Router();
const LoginController = require("./controllers/LoginController");

routes.post("/createaccount", LoginController.create);
routes.get("/logins", LoginController.index);
routes.post("/login", LoginController.login);

module.exports = routes;
