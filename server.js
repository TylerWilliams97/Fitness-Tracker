const express = require("express");
const mongoose = require("mongoose");
const mainRoutes = require("./public/api");
const mongoRoutes = require("./public/mongoroutes");
const htmlRoutes = require("./public/htmlroutes");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(mongoRoutes);
app.use(htmlRoutes);
//app.use(mainRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});