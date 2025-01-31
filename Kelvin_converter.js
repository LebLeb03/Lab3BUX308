//Converter for Kelvin to fahrenheit

function KelvinConverter(kelvin) {
    if (typeof kelvin !== "number" || kelvin < 0) {
        throw new Error("Invalid input: Temperature in Kelvin must be a non-negative number.");
    }
    
    let fahrenheit = (kelvin - 273.15) * (9/5) + 32;
    return fahrenheit.toFixed(2) + " °F"; // Rounds to 2 decimal places
}

export { KelvinConverter };

