const User = require("../models/User");
const mongoose = require("mongoose");

const createUsers = async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    return res.send(user);
  } catch (e) {
    console.log(e);
    res.send(e.message);
  }
};

const readUsers = async (req, res, next) => {
  const user = req.user;
  res.send(user);
};

const readUser = async (req, res, next) => {
  const _id = req.params.id;
  const users = await User.findById(_id);
  if (!users) {
    return res.status(404);
  }
  res.send(users);
};

const updateUser = async (req, res, next) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const user = await User.findById(req.params.id);

  updates.forEach((update) => (user[update] = req.body[update]));
  await user.save();

  res.send(user);
  // User.findByIdAndUpdate(_id, update, {
  //   new: true,
  //   runValidators: true,
  // }).then((user) => {
  //   console.log(user);
  //   return res.send(user);
  // });
};

const deleteUser = async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  return res.send(user);
};

const deleteAllUsers = async (req, res, next) => {
  // const user = await User.find({});
  const del = await User.deleteMany();

  res.send(del);
};

const login = async (req, res, next) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );

    // console.log(user.email);
    // await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken();
    res.send(user);
  } catch (e) {
    console.log(e);
    res.send("error");
  }
};

const logOut = async (req, res, next) => {
  console.log(req.user);
  req.user.tokens = [];
  await req.user.save();
  res.send(req.user);
};

module.exports = {
  createUsers,
  readUsers,
  readUser,
  updateUser,
  deleteUser,
  login,
  deleteAllUsers,
  logOut,
};
