const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./Models/mongo.conn");
require("./cache");
const UsersModel = require("./Models/users.model");
const CommentsModel = require("./Models/comments.model");
const cleanCache = require("./middleware/cleanCache");

app = express();
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());

app.get("/comment/:userId", async (req, res) => {
  const comments = await CommentsModel.find({
    userId: mongoose.Types.ObjectId(req.params.userId),
  }).cache({key:req.params.userId});
  res.send({ status: "OK", comments });
});

app.post("/comment", cleanCache, async (req, res) => {
  const comment = new CommentsModel({
    ...req.body,
    userId: mongoose.Types.ObjectId(req.body.userId),
  });
  await comment.save();
  res.send({ status: "OK", comment });
});

app.get("/user", (req, res) => {
  res.send("Hello World");
});

app.post("/user", async (req, res) => {
  const user = new UsersModel(req.body);
  await user.save();
  res.send({ status: "OK", user });
});

app.get("/user/:userId", async (req, res) => {
  console.log(req.params);
  const user = await UsersModel.findOne({
    _id: mongoose.Types.ObjectId(req.params.userId),
  });
  res.send({ status: "OK", user });
});

app.listen(8080, () => console.log("connected to 8080"));
