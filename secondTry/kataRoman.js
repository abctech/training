const mapping = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
};

function removeComma(number) { // string number
  return number.replace(',', '');
}

module.exports = {
  arabicToRoman: function (arabic) {
    return mapping[removeComma(arabic)];
  },

  // TODO
  romanToArabic: function (roman) {
  },
};
