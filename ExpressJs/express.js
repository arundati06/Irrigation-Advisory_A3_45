const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Sugarcane Irrigation Advisory System</h1>");
});

app.get("/about", function(req, res) {
    res.send("<h2>About the System</h2><p>This system provides irrigation advice for sugarcane crops.</p>");
});

app.get("/data", function(req, res) {
    const data = {
        crop: "Sugarcane",
        soilMoisture: 35,
        temperature: 30,
        irrigation: "Required"
    };

    res.json(data);
});

app.get("/contact", function(req, res) {
    res.send("<h2>Contact</h2><p>Contact the Agriculture Advisory Department.</p>");
});

app.listen(8000, function() {
    console.log("Server running at http://localhost:8000");
});
