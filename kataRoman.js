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

    // string number
    extractDigit: function (number, position) {
        let digit = number.charAt(position - 1);
        let numZeroes = number.length - position;

        digit += String(Math.pow(10, numZeroes)).substring(1);

        return digit;
    },

    // string digit
    arabicDigitToRoman: function (digit) {
        for (let key in mapping) {
            if (mapping.hasOwnProperty(key)) {
                if (digit === key) {
                    return mapping[key];
                }
            }
        }
    },

    // string arabic (may include a comma)
    arabicToRoman: function (arabic) {
        arabic = this.removeComma(arabic);
        let converted = '';

        arabic.split('').forEach((digit, index) => {
            if (digit !== '0') {
                converted += this.arabicDigitToRoman(this.extractDigit(arabic, index + 1));
            }
        });

        return converted;
    },
};
