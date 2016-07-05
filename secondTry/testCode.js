const kataRoman = require('./kataRoman');

function testArabicToRoman(arabic, roman) { // string arabic
  var converted = kataRoman.arabicToRoman(arabic);
  var result;

  if (converted === roman) {
    result = 'Correct';
  } else {
    result = 'Incorrect';
  }

  console.log(`${arabic} = ${converted} ${result}`);
}

function testRomanToArabic(roman, arabic) { // int arabic
  var converted = kataRoman.romanToArabic(roman);
  var result;

  if (converted === arabic) {
    result = 'Correct';
  } else {
    result = 'Incorrect';
  }

  console.log(`${roman} = ${converted} ${result}`);
}

// first iteration
// testArabicToRoman('1', 'I');
// testArabicToRoman('5', 'V');

// test extractDigit()
// console.log(kataRoman.extractDigit('130', 1));
// console.log(kataRoman.extractDigit('103450', 3));

// test digitToRoman()
// console.log(kataRoman.digitToRoman('500'));
// console.log(kataRoman.digitToRoman('30'));
// console.log(kataRoman.digitToRoman('2000'));
// console.log(kataRoman.digitToRoman('700'));
// console.log(kataRoman.digitToRoman('40'));
// console.log(kataRoman.digitToRoman('9'));
// console.log(kataRoman.digitToRoman('1'));

// second iteration
// testArabicToRoman('15', 'XV');
// testArabicToRoman('151', 'CLI');
// testArabicToRoman('2357', 'MMCCCLVII');

testRomanToArabic('I', 1);
testRomanToArabic('V', 5);
testRomanToArabic('III', 3);
testRomanToArabic('IV', 4);
testRomanToArabic('CXXIII', 123);
testRomanToArabic('MMCLXXIV', 2174);
