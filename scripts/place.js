document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

// wind chill calculation
function calculateWindChill(tempC, windKmH) {
    // convert to Fahrenheit and mph for calculation
    const tempF = tempC * 9 / 5 + 32;
    const speedMPH = windKmH / 1.609;

    return (
        35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(speedMPH, 0.16) +
        0.4275 * tempF * Math.pow(speedMPH, 0.16)
    );
}

const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);
const chillEl = document.getElementById("chill");

if (temp <= 10 && speed > 4.8) {
    const chillF = calculateWindChill(temp, speed);
    const chillC = ((chillF - 32) * 5) / 9;
    chillEl.textContent = `${chillC.toFixed(1)} °C`;
} else {
    chillEl.textContent = "N/A";
}
