const PORT = process.env.PORT || 8081;

const express = require("express");
const app = express();

app.use(express.static("./public/"));

app.locals.pretty = true;

// set the view engine to ejs
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.get("*", function (req, res) {
  res.send("Cant find the requested page", 404);
});

app.listen(PORT);
console.log(PORT + " is the magic port");
