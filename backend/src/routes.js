const express = require("express");
const routes = express.Router();
const LoginController = require("./controllers/LoginController");
const OrderController = require("./controllers/OrderController");
const MeditionController = require("./controllers/MeditionController");

routes.post("/createaccount", LoginController.create);
routes.get("/logins", LoginController.index);
routes.post("/login", LoginController.login);

routes.get("/orders", OrderController.index);
routes.post("/orders", OrderController.create);
routes.post("/deleteorder", OrderController.delete);

routes.get("/meditions", MeditionController.index);
routes.post("/meditions", MeditionController.create);
routes.post("/deletemeditions", MeditionController.delete);

module.exports = routes;
