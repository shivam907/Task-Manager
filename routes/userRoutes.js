const express = require("express");
const controller = require("../controllers/userControllers");

const routers = express.Router();

const createRoutes = routers.post("/users", controller.createUsers);

const readRoutes = routers.get("/users", controller.readUsers);
const readRoute = routers.get("/users/:id", controller.readUser);

const updateRoute = routers.patch("/users/:id", controller.updateUser);

const deleteRoute = routers.delete("/users/:id", controller.deleteUser);

const loginUser = routers.post("/users/login", controller.login);

const deleteAllUsers = routers.delete(
  "/users/delete",
  controller.deleteAllUsers
);

module.exports = {
  createRoutes,
  readRoutes,
  readRoute,
  updateRoute,
  deleteRoute,
  loginUser,
};
