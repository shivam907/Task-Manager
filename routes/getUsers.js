const express = require("express");
const controller = require("../controllers/getUsers");

const routers = express.Router();

const postRoutes = routers.post("/users", controller.postUsers);

const getRoutes = routers.get("/users", controller.getUsers);
const getUserRoutes = routers.get("/users/:id", controller.getUserById);

module.exports = { postRoutes, getRoutes, getUserRoutes };
