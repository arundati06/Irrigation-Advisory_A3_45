const fs = require("fs");

//  WRITE 
if (!fs.existsSync("sensor.txt")) {
    fs.writeFileSync("sensor.txt", "Sugarcane Irrigation Data\n");
    console.log("Data written successfully");
}

//  APPEND 
fs.appendFileSync("sensor.txt", "Soil Moisture: 45%\n");
fs.appendFileSync("sensor.txt", "Temperature: 25 C\n");
fs.appendFileSync("sensor.txt", "Irrigation: Not required\n");

console.log("New sensor data appended successfully");

//  READ 
const data = fs.readFileSync("sensor.txt", "utf8");

console.log("\nComplete Sensor Data:");
console.log(data);