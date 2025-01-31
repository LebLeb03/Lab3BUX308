function Converion_scale(speed, unit = "kmh") {
    // Convert mph to km/h if needed
    let speedInKmh = unit === "mph" ? speed * 1.60934 : speed;

 if (speedInKmh < 1) return "Calm";
 if (speedInKmh < 6) return "Light Air";
 if (speedInKmh < 12) return "Light Breeze";
 if (speedInKmh < 20) return "Gentle Breeze";
 if (speedInKmh < 29) return "Moderate Breeze";
 if (speedInKmh < 39) return "Fresh Breeze";
 if (speedInKmh < 50) return "Strong Breeze";
 if (speedInKmh < 62) return "Near Gale";
 if (speedInKmh < 75) return "Gale";
 if (speedInKmh < 89) return "Strong Gale";
 if (speedInKmh < 103) return "Storm";
 if (speedInKmh < 118) return "Violent Storm";
 return "Hurricane";
}
export {Converion_scale}