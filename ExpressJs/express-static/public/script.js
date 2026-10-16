function checkIrrigation() {
    const moisture = document.getElementById("moisture").value;
    const result = document.getElementById("result");

    if (moisture === "") {
        result.innerText = "Please enter soil moisture value.";
    } else if (moisture < 40) {
        result.innerText = "Soil moisture is low. Irrigation is required.";
        result.style.color = "red";
    } else {
        result.innerText = "Soil moisture is sufficient. Irrigation is not required.";
        result.style.color = "green";
    }
}