const RomanNumerals = require("../src/RomanNumerals");

describe("RomanNumeralsTest", () => {
  const romanNumerals = new RomanNumerals();
  test("converts 1 to I", () => {
    expect(romanNumerals.toRoman(1)).toBe("I");
  });

  test("converts 2 to II", () => {
    expect(romanNumerals.toRoman(2)).toBe("II");
  });

  test("converts 3 to III", () => {
    expect(romanNumerals.toRoman(3)).toBe("III");
  });
});
