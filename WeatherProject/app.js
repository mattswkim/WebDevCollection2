const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
  console.log(req.body.cityName)
  const location = req.body.cityName;
  const apiKey = "4f0deb744677bcd0e029efbc566bdd80";
  const units ="metric"
  const url ="https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apiKey + "&units="+ units;
  https.get(url, (response) => {
    console.log(response.statusCode);
    response.on("data", (data) => {
      weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDes = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgURL = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
      console.log(temp);
      console.log(weatherDes);
      res.write("<p>The weather is currently " + weatherDes + "</p>");
      res.write("<h1>The temperature in "+ location +" is " + temp + " degrees Celcius.</h1>");
      res.write("<img src="+ imgURL +">")
      res.send();
    })    
  })
})



app.listen(3000, () => {
  console.log("Server is running on port 3000")
})