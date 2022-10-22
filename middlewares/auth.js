module.exports = (req, res, next) => {
  console.log("In the middleware");
  next();
};
