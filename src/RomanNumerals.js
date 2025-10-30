class RomanNumerals {
  toRoman(decimalNumber) {
    let romanNumeral = "";
    let remainingValue = decimalNumber;

    const decimalToRomanMappings = [
      { decimalValue: 1000, romanSymbol: "M" },
      { decimalValue: 900, romanSymbol: "CM" },
      { decimalValue: 500, romanSymbol: "D" },
      { decimalValue: 400, romanSymbol: "CD" },
      { decimalValue: 100, romanSymbol: "C" },
      { decimalValue: 90, romanSymbol: "XC" },
      { decimalValue: 50, romanSymbol: "L" },
      { decimalValue: 40, romanSymbol: "XL" },
      { decimalValue: 10, romanSymbol: "X" },
      { decimalValue: 9, romanSymbol: "IX" },
      { decimalValue: 5, romanSymbol: "V" },
      { decimalValue: 4, romanSymbol: "IV" },
      { decimalValue: 1, romanSymbol: "I" },
    ];

    // Conversion using successive subtraction
    for (const mapping of decimalToRomanMappings) {
      while (remainingValue >= mapping.decimalValue) {
        romanNumeral += mapping.romanSymbol;
        remainingValue -= mapping.decimalValue;
      }
    }

    return romanNumeral;
  }
}

module.exports = RomanNumerals;
