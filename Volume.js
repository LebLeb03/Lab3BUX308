function TrianglePrismVolume(side, height) {
    if (typeof side !== "number" || typeof height !== "number" || side <= 0 || height <= 0) {
        throw new Error("Invalid input: Side and height must be positive numbers.");
    }

    let baseArea = (Math.sqrt(3) / 4) * (side * side); // Area of equilateral triangle
    let volume = baseArea * height; // Volume of prism

    return volume;
}

export{TrianglePrismVolume}