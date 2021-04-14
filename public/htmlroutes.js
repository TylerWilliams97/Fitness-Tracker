const app = require("express").Router();
var path = require("path");

//module.exports = function(app) {
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "./exercise.html"));
  });
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"))
  });
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "./stats.html"))
  });
//};
module.exports = app;