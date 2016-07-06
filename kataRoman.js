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
    removeComma: function(number) {
        return number.replace(',', '');
    },

    // string arabic (may include commas)
    arabicToRoman: function(arabic) {
        arabic = this.removeComma(arabic);
        let converted = '';

        for (let key in mapping) {
            if (mapping.hasOwnProperty(key)) {
                if (arabic === key) {
                    return mapping[key];
                }
            }
        }

        return converted;
    },
};
