const Task = require("../models/Task");

const postTasks = (req, res, next) => {
  const task = new Task(req.body);
  task.save().then(() => {
    return res.send(task);
  });
  //   res.send("Testing bro");
};

const getTasks = (req, res, next) => {
  Task.find({}).then((tasks) => {
    res.send(tasks);
  });
};

const getTaskById = (req, res, next) => {
  // const { ObjectId } = require("mongodb");
  const _id = req.params.id;
  console.log(req.params.id);
  // var _id = mongoose.mongo.BSONPure.ObjectID.fromHexString(req.params.id);
  // const _id = mongoose.Types.ObjectId(req.params.id);
  // const _id = req.params.id;
  console.log(_id);
  Task.findById(_id).then((task) => {
    if (!task) {
      return res.status(404);
    }
    res.send(task);
  });
};

module.exports = { postTasks, getTasks, getTaskById };
