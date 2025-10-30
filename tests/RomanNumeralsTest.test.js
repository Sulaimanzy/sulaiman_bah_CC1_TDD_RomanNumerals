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

  // Tests for the subtractive logic
  test("converts 4 to IV", () => {
    expect(romanNumerals.toRoman(4)).toBe("IV");
  });

  test("converts 9 to IX", () => {
    expect(romanNumerals.toRoman(9)).toBe("IX");
  });
});
