'use strict';

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

  getKeyArray: function () {
    let keyArray = Object.keys(mapping);

    return keyArray.reverse();
  },

  // string number, int position: position from left starting from 1
  // example:
  //  extractDigit('135', 1) = '100'
  extractDigit: function (number, position) {
    let digit = number.charAt(position - 1);
    let numZeroes = number.length - position;

    digit += String(Math.pow(10, numZeroes)).substring(1);

    return digit;
  },

  // string digit
  digitToRoman: function (digit) {
    let intDigit = parseInt(digit, 10);
    let keyArray = this.getKeyArray();

    for (let i = 0; i < keyArray.length; i++) {
       let key = keyArray[i];

      if (Object.prototype.hasOwnProperty.call(mapping, key)) {
        let intKey = parseInt(key, 10);

        if (intDigit === intKey) {
          return mapping[key];
        } else if (intDigit > intKey) {
          switch (digit.charAt(0)) {
            case '4':
              return mapping[key] + mapping[keyArray[i - 1]];
            case '9':
              return mapping[keyArray[i + 1]] + mapping[keyArray[i - 1]];
            default:
              return mapping[key] + this.digitToRoman(String(intDigit - intKey));
          }
        }
      }
    }
  },

  invertMapping: function() {
    let invertedMapping = {};

    for (let key in mapping) {
      invertedMapping[mapping[key]] = key;
    }

    return invertedMapping;
  },

  arabicToRoman: function (arabic) {
    let arabicNoComma = this.removeComma(arabic);
    let converted = '';

    arabicNoComma.split('').forEach((digit, index) => {
      converted += this.digitToRoman(this.extractDigit(arabicNoComma, index + 1));
    });

    return converted;
  },

  romanToArabic: function (roman) {
    let invertedMapping = this.invertMapping();
    let arabic = 0;

    if (roman.length === 1) {
      return parseInt(invertedMapping[roman], 10);
    }

    for (let i = 1; i < roman.length; i++) {
      let prevC = roman.charAt(i - 1);
      let currentC = roman.charAt(i);
      let prevValue = parseInt(invertedMapping[prevC], 10);
      let currentValue = parseInt(invertedMapping[currentC], 10);

      if (prevValue >= currentValue) {
        arabic += prevValue;

        if (i === roman.length - 1) {
          arabic += currentValue;
        }
      } else {
        arabic += currentValue - prevValue;
        i += 2;
      }
    }

    return arabic;
  },
};
