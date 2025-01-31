import {KelvinConverter} from "../Kelvin_converter.js";

describe("Kelvin to Fahrenheit Converter", () => {

  it("should convert 0 Kelvin to -459.67°F (absolute zero)", () => {
      expect(KelvinConverter(0)).toBe("-459.67 °F");
  });

  it("should convert 273.15 Kelvin to 32.00°F (freezing point of water)", () => {
      expect(KelvinConverter(273.15)).toBe("32.00 °F");
  });

  it("should convert 300 Kelvin to 80.33°F", () => {
      expect(KelvinConverter(300)).toBe("80.33 °F");
  });

});