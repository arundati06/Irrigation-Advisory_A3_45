const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req, res) {

    if (req.url == "/" && req.method == "GET") {

        fs.readFile("sugarcane.html", function(err, data) {

            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.write("Error reading HTML file");
                res.end();
                return;
            }

            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    }

    else if (req.url == "/data" && req.method == "GET") {

        const data = {
            crop: "Sugarcane",
            soilMoisture: 35,
            temperature: 30,
            irrigation: "Required"
        };

        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(data));
        res.end();
    }

    else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("Page Not Found");
        res.end();
    }
});

server.listen(8000, function() {
    console.log("Server running at http://localhost:8000");
});