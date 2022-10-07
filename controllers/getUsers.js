const User = require("../models/User");
const mongoose = require("mongoose");
const postUsers = (req, res, next) => {
  const user = new User(req.body);
  user.save().then(() => {
    return res.send(user);
  });
  //   res.send("Testing bro");
};

const getUsers = (req, res, next) => {
  User.find({}).then((users) => {
    res.send(users);
  });
};
const getUserById = (req, res, next) => {
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

module.exports = { postUsers, getUsers, getUserById };
