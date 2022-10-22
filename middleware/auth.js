const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const decoded = jwt.verify(token, "cezisbest");
  const user = await User.findOne({ _id: decoded._id, "tokens.token": token });
  req.user = user;
  next();
};
