
const { log } = require("console");
const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Sapucaia do Sul&appid=cec112f2933db1c3dd422caf826350e8&units=metric"
    https.get(url, function(response) {
        console.log(response.statusCode);
        
        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            console.log(weatherDescription);

        });
    });

    res.send("The server is up and running."); 
});



app.listen(3000, function() {
    console.log("Server is running on port 3000.");
});

//JSON.stringify(data)