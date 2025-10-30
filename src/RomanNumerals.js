class RomanNumerals {
  toRoman(number) {
    let roman = "";

    for (let count = 0; count < number; count++) {
      roman += "I";
    }

    return roman;
  }
}

module.exports = RomanNumerals;
