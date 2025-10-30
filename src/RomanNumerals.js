class RomanNumerals {
  toRoman(decimalNumber) {
    let romanNumeral = "";
    let remainingValue = decimalNumber;

    const decimalToRomanMappings = [
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
