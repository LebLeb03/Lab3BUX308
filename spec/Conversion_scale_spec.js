import { Converion_scale } from "../Scale.js";

describe("Wind Speed to Beaufort Scale Description", () => {

    it("should classify 0 km/h as 'Calm'", () => {
        expect(Converion_scale(0)).toBe("Calm");
    });

    it("should classify 5 km/h as 'Light Air'", () => {
        expect(Converion_scale(5)).toBe("Light Air");
    });

    it("should classify 10 km/h as 'Light Breeze'", () => {
        expect(Converion_scale(10)).toBe("Light Breeze");
    });

    it("should classify 25 km/h as 'Moderate Breeze'", () => {
        expect(Converion_scale(25)).toBe("Moderate Breeze");
    });

    it("should classify 35 km/h as 'Fresh Breeze'", () => {
        expect(Converion_scale(35)).toBe("Fresh Breeze");
    });

    it("should classify 45 km/h as 'Strong Breeze'", () => {
        expect(Converion_scale(45)).toBe("Strong Breeze");
    });

    it("should classify 55 km/h as 'Near Gale'", () => {
        expect(Converion_scale(55)).toBe("Near Gale");
    });

    it("should classify 70 km/h as 'Gale'", () => {
        expect(Converion_scale(70)).toBe("Gale");
    });

    it("should classify 100 km/h as 'Storm'", () => {
        expect(Converion_scale(100)).toBe("Storm");
    });

    it("should classify 115 km/h as 'Violent Storm'", () => {
        expect(Converion_scale(115)).toBe("Violent Storm");
    });

    it("should classify 120 km/h as 'Hurricane'", () => {
        expect(Converion_scale(120)).toBe("Hurricane");
    });

});
