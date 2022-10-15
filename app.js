const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const validator = require("validator");

const app = express();
const homeRouters = require("./routes/mainRoutes");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/getTask");

const User = require("./models/User");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(homeRouters);
for (let i in userRoutes) {
  app.use(userRoutes[i]);
}

// app.use(taskRoutes.getRoutes);
// app.use(taskRoutes.getTaskRoutes);
// app.use(taskRoutes.postRoutes);
// app.listen(1235);
mongoose.connect(
  "mongodb+srv://shivam:1234@cluster0.ljlrg2q.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    // useCreateIndex: true,
  }
);

app.listen(1235);

// const me = new User({
//   name: "cez",
//   email: "cez@c.com",
//   age: 99,
//   password: "Sh  iv@9",
// });

// me.save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// app.post("/users", (req, res, next) => {
//   console.log(req.body);
//   res.send("Testing");
// });

// const MongoClient = mongodb.MongoClient;

// const connectionUrl =
//   "mongodb+srv://shivam:1234@cluster0.ljlrg2q.mongodb.net/?retryWrites=true&w=majority";
// const database = "task-manager";

// MongoClient.connect(
//   connectionUrl,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       console.log(error);
//       return console.log("Unable to connect");
//     }
//     console.log("Connected");
//     const db = client.db(database);
//     db.collection("users").insertMany(
//       [
//         {
//           name: "shivam",
//           age: 19,
//         },
//         {
//           name: "shivam",
//           age: "20",
//         },
//         {
//           name: "shivam",
//           age: 21,
//         },
//       ],
//       (error, result) => {
//         if (error) {
//           return console.log("Error");
//         }
//         console.log(result.acknowledged);
//       }
//     );
//     db.collection("users")
//       .find({ name: "shivam" })
//       .toArray((_, users) => {
//         console.log(users);
//       });
//   }
// );
