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

    // digit: 1-char string
    extractDigit: function (digit, index, array) {
        let numZeroes = array.length - index - 1;

        if (digit !== '0') {
            digit += String(Math.pow(10, numZeroes)).substring(1);
        }

        return digit;
    },

    // digit: string
    arabicDigitToRoman: function (digit) {
        if (digit === '0') {
            return '';
        }

        let intDigit = parseInt(digit, 10);
        let keys = Object.keys(mapping).reverse();

        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];

            if (Object.prototype.hasOwnProperty.call(mapping, key)) {
                let intKey = parseInt(key, 10);

                if (intDigit === intKey) {
                    return mapping[key];
                } else if (intDigit > intKey) {
                    switch (digit.charAt(0)) {
                        case '4':
                            return mapping[key] + mapping[keys[i - 1]];
                        case '9':
                            return mapping[keys[i + 1]] + mapping[keys[i - 1]];
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

    // arabic: string (may include a comma)
    arabicToRoman: function (arabic) {
        arabic = this.removeComma(arabic);

        return arabic.split('')
            .map(this.extractDigit)
            .map(this.arabicDigitToRoman, this)
            .join('');
    },

    romanToArabic: function (roman) {
        let invertedMapping = this.invertMapping();
        let arabic = 0;

        if (roman.length === 1) {
            return parseInt(invertedMapping[roman], 10);
        }

        let checkPrev = true;

        for (let i = 1; i < roman.length; i++) {
            let prevC = roman.charAt(i - 1);
            let currentC = roman.charAt(i);
            let prevValue = parseInt(invertedMapping[prevC], 10);
            let currentValue = parseInt(invertedMapping[currentC], 10);

            if (prevValue >= currentValue) {
                if (checkPrev) {
                    arabic += prevValue;
                    checkPrev = false;
                }

                if (String(prevValue).length !== String(currentValue).length) {
                    checkPrev = true;
                    continue;
                }

                arabic += currentValue;
            } else {
                arabic += currentValue - prevValue;
                i++;

                if (i + 1 === roman.length) {
                    console.log(roman, (i + 1) - roman.length, roman.substring(i));
                    arabic += this.romanToArabic(roman.substring(i));
                }
            }
        }

        return arabic;
    },
};
