const express = require("express");
const routers = express.Router();
const controller = require("../controllers/mainControllers");

module.exports = routers.get("/", controller);
