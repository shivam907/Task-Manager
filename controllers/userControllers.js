const User = require("../models/User");
const mongoose = require("mongoose");

const createUsers = (req, res, next) => {
  const user = new User(req.body);
  user.save().then(() => {
    return res.send(user);
  });
  //   res.send("Testing bro");
};

const readUsers = (req, res, next) => {
  User.find({}).then((users) => {
    res.send(users);
  });
};

const readUser = (req, res, next) => {
  // const { ObjectId } = require("mongodb");
  const _id = req.params.id;
  console.log(req.params.id);
  // var _id = mongoose.mongo.BSONPure.ObjectID.fromHexString(req.params.id);
  // const _id = mongoose.Types.ObjectId(req.params.id);
  // const _id = req.params.id;
  console.log(_id);
  User.findById(_id).then((users) => {
    if (!users) {
      return res.status(404);
    }
    res.send(users);
  });
};

const updateUser = (req, res, next) => {
  const _id = req.params.id;
  const update = req.body;

  User.findByIdAndUpdate(_id, update, {
    new: true,
    runValidators: true,
  }).then((user) => {
    console.log(user);
    return res.send(user);
  });
};

const deleteUser = (req, res, next) => {
  User.findByIdAndDelete(req.params.id).then((user) => {
    console.log(user);
    return res.send(user);
  });
};

module.exports = { createUsers, readUsers, readUser, updateUser, deleteUser };
