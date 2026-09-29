const http = require("http");

const server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1> Irrigation Advisory System</h1>");
    res.write("<p>Welcome to Sugarcane Irrigation Advisory System</p>");
    res.end();
});

server.listen(8000, function() {
    console.log("Server running at http://localhost:8000");
});