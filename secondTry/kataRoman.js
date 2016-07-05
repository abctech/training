const has = require('has');

const mapping = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
};

module.exports = {
  // string number
  removeComma: function removeComma(number) {
    return number.replace(',', '');
  },

  // string number, int position: position from left starting from 1
  // example:
  //  extractDigit('135', 1) = '100'
  extractDigit: function extractDigit(number, position) {
    var digit = number.charAt(position - 1);
    var numZeroes = number.length - position;

    digit += String(Math.pow(10, numZeroes)).substring(1);

    return digit;
  },

  // string digit
  digitToRoman: function digitToRoman(digit) {

  },

  arabicToRoman: function (arabic) {
    var arabicNoComma = removeComma(arabic);

    // return mapping[removeComma(arabic)];
  },

  romanToArabic: function (roman) {
    // TODO
  },
};
