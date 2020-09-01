const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("<h1>hello</h1>");
  // console.log(res);
})

app.get("/contact", function(req, res) {
  res.send("Contact me!");
})

app.get("/about", function(req, res) {
  res.send("Hi there! I'm Matt Kim!");
})
app.listen(3000, function(){
  console.log("server started on port 3000");
});
