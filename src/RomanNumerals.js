class RomanNumerals {
  toRoman(number) {
    let result = "";

    for (let i = 0; i < number; i++) {
      result += "I";
    }

    return result;
  }
}

module.exports = RomanNumerals;
