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

    // string number (no comma)
    extractDigit: function (number, position) {
        let digit = number.charAt(position - 1);
        let numZeroes = number.length - position;

        digit += String(Math.pow(10, numZeroes)).substring(1);

        return digit;
    },

    getKeyArray: function () {
        let keyArray = Object.keys(mapping);

        return keyArray.reverse();
    },

    // string digit
    arabicDigitToRoman: function (digit) {
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
                            return mapping[key] + this.arabicDigitToRoman(String(intDigit - intKey));
                    }
                }
            }
        }
    },

    invertMapping: function () {
        let invertedMapping = {};

        for (let key in mapping) {
            if (mapping.hasOwnProperty(key)) {
                invertedMapping[mapping[key]] = key;
            }
        }

        return invertedMapping;
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
            } else {
                arabic += currentValue - prevValue;
                i += 2;

                if (i === roman.length) {
                    arabic += parseInt(invertedMapping[roman.charAt(roman.length - 1)], 10);
                }
            }
        }

        return arabic;
    },
};
