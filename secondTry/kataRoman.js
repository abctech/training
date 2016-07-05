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
  removeComma: function (number) {
    return number.replace(',', '');
  },

  // int digit
  removeZeroes: function (digit) {
    return parseInt(String(digit).charAt(0));
  },

  getKeyArray: function () {
    var keyArray = Object.keys(mapping);

    return keyArray.reverse();
  },

  // string number, int position: position from left starting from 1
  // example:
  //  extractDigit('135', 1) = '100'
  extractDigit: function (number, position) {
    var digit = number.charAt(position - 1);
    var numZeroes = number.length - position;

    digit += String(Math.pow(10, numZeroes)).substring(1);

    return digit;
  },

  // string digit
  digitToRoman: function (digit) {
    var intDigit = parseInt(digit);
    var keyArray = this.getKeyArray();

    for (var i = 0; i < keyArray.length; i++) {
      key = keyArray[i];

      if (Object.prototype.hasOwnProperty.call(mapping, key)) {
        var intKey = parseInt(key);

        if (intDigit === intKey) {
          return mapping[key];
        } else if (intDigit > intKey) {
          if (digit.charAt(0) === '4') {
            return mapping[key] + mapping[keyArray[i - 1]];
          } else if (digit.charAt(0) === '9') {
            return mapping[keyArray[i + 1]] + mapping[keyArray[i - 1]];
          } else {
            return mapping[key] + this.digitToRoman(String(intDigit - intKey));
          }
        }
      }
    }
  },

  arabicToRoman: function (arabic) {
    var arabicNoComma = this.removeComma(arabic);
    var converted = '';

    arabicNoComma.split('').forEach((digit, index) => {
      converted += this.digitToRoman(this.extractDigit(arabicNoComma, index + 1));
    });

    return converted;
  },

  romanToArabic: function (roman) {
    // TODO
  },
};
