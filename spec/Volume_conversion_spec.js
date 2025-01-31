import { TrianglePrismVolume } from "../Volume.js";

describe("Volume of an Equilateral Triangle Prism", () => {

    it("should calculate the volume for side 5 and height 10", () => {
        expect(TrianglePrismVolume(5, 10)).toBeCloseTo(108.253, 3);
    });

    it("should calculate the volume for side 3 and height 7", () => {
        expect(TrianglePrismVolume(3, 7)).toBeCloseTo(27.2798, 4); // Increased precision
    });

    it("should calculate the volume for side 8 and height 6", () => {
        expect(TrianglePrismVolume(8, 6)).toBeCloseTo(166.2769, 4); // Increased precision
    });

    it("should throw an error for negative side length", () => {
        expect(() => TrianglePrismVolume(-3, 10)).toThrowError("Invalid input: Side and height must be positive numbers.");
    });

    it("should throw an error for zero height", () => {
        expect(() => TrianglePrismVolume(4, 0)).toThrowError("Invalid input: Side and height must be positive numbers.");
    });

    it("should throw an error for non-numeric inputs", () => {
        expect(() => TrianglePrismVolume("five", 10)).toThrowError("Invalid input: Side and height must be positive numbers.");
    });

});
