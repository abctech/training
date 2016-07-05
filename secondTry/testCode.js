var kataRoman = require('./kataRoman');

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
testArabicToRoman('1', 'I');
testArabicToRoman('5', '5');
