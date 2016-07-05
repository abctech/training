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

// first iteration
// testArabicToRoman('1', 'I');
// testArabicToRoman('5', 'V');

// second iteration
// testArabicToRoman('15', 'XV');
// testArabicToRoman('151', 'CLI');

// test extractDigit()
console.log(kataRoman.extractDigit('130', 1));
console.log(kataRoman.extractDigit('103450', 3));
