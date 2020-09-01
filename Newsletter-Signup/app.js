const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendfile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;
  console.log(firstName, lastName, email);
});

app.listen(3000, function() {
  console.log("server is running on port 3000");
});