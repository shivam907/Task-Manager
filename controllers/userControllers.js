const User = require("../models/User");
const mongoose = require("mongoose");

const createUsers = async (req, res, next) => {
  const user = new User(req.body);
  await user.save();
  return res.send(user);
};

const readUsers = async (req, res, next) => {
  const users = await User.find({});
  res.send(users);
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

module.exports = { createUsers, readUsers, readUser, updateUser, deleteUser };
