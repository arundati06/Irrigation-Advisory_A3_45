const express = require("express");
const path = require("path");

const app = express();

// Built-in middleware to serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, function () {
    console.log("Server running at http://localhost:3000");
});