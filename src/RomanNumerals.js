class RomanNumerals {
  toRoman(number) {
    let roman = "";

    if (number >= 9) {
      roman += "IX";
      number -= 9;
    }

    if (number >= 4) {
      roman += "IV";
      number -= 4;
    }

    for (let count = 0; count < number; count++) {
      roman += "I";
    }

    return roman;
  }
}

module.exports = RomanNumerals;
