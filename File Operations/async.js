const fs = require("fs").promises;

async function fileOperation() {
    try {

        // 1. WRITE - Write initial data only if file does not exist
        try {
            await fs.access("sensor.txt");
        } catch {
            await fs.writeFile(
                "sensor2.txt",
                "Sugarcane Irrigation Data\n"
            );
            console.log("Data written successfully");
        }

        // 2. APPEND - Add new sensor data with a blank line
        await fs.appendFile(
            "sensor2.txt",
            "\nSoil Moisture: 55%\n"
        );

        await fs.appendFile(
            "sensor2.txt",
            "Temperature: 40 C\n"
        );

        await fs.appendFile(
            "sensor2.txt",
            "Irrigation: Not required\n"
        );

        console.log("New sensor data appended successfully");

        // 3. READ - Read complete file
        const data = await fs.readFile(
            "sensor2.txt",
            "utf8"
        );

        console.log("\nComplete Sensor Data:");
        console.log(data);

    } catch (err) {
        console.log("Error:", err);
    }
}

fileOperation();