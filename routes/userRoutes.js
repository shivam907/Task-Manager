const express = require("express");
const controller = require("../controllers/userControllers");
const auth = require("../middleware/auth");

const routers = express.Router();

const createRoutes = routers.post("/users", controller.createUsers);

const readRoutes = routers.get("/users/me", auth, controller.readUsers);
const readRoute = routers.get("/users/:id", controller.readUser);

const readAll = routers.get("/users", controller.readAll);

const updateRoute = routers.patch("/users/:id", controller.updateUser);

const deleteRoute = routers.delete("/users/:id", controller.deleteUser);

const logInUser = routers.post("/users/login", controller.login);
const logOut = routers.post("/users/logOut", auth, controller.logOut);

const deleteAllUsers = routers.delete(
  "/users/delete",
  controller.deleteAllUsers
);

// module.exports = {
//   createRoutes,
//   readRoutes,
//   readRoute,
//   updateRoute,
//   deleteRoute,
//   logInUser,
//   deleteAllUsers,
//   logOut,
//   readAll,
// };
module.exports = routers