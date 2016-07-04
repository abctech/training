var fs = require('fs');

const diameter = ",";
const testFileName = "testData.txt";
const romanRef = "romanLetters.txt";
var romanLetters = [];

// convert the input digit to letters
function digitToRoman(digit) {
  var result = "";

  for(var i=romanLetters.length-1; i>=0; i--) {
    if(digit==romanLetters[i][0]) {
      result = romanLetters[i][1];
      break;
    } else if(digit>romanLetters[i][0]) {
      var divider = Math.pow(10, (digit.toString().length-1));
      var diff = (digit-romanLetters[i][0])/divider;
      if(digit/divider>5) {
        if(diff<=3) {
          result = romanLetters[i][1];
          for(var j=0; j<diff; j++) result += romanLetters[i-1][1];
        } else {
          result = romanLetters[i-1][1] + romanLetters[i+1][1];
        }
      } else {
        if(diff<=2) {
          for(var j=0; j<diff+1; j++) result += romanLetters[i][1];
        } else {
          result = romanLetters[i][1] + romanLetters[i+1][1];
        }
      }
      break;
    }
  }
  return result;
}

// function romanToDigit(roman) {
//
// }

// convert the input number to Roman numbers
function convertToRoman(number) {
  var converted = "";
  var numDigits = number.length;
  for(var i=0; i<numDigits; i++) { // start with the most significant digit
    var digit = parseInt(number.charAt(0));
    if(digit != 0) {
      var multiplyer = Math.pow(10, (number.length-1));
      converted += digitToRoman(digit*multiplyer);
    }
    number = number.substring(1);
  }
  return converted;
}

function populateRomanLetters() {
  fs.readFileSync(romanRef).toString().split("\n").forEach(function(line) {
    if(line === "") return;
    var tokens = line.split(diameter);
    romanLetters.push([tokens[0], tokens[1]]);
  })
}

populateRomanLetters();

fs.readFile(testFileName, function(err, data) {
  if(err) console.log(err);
  var lines = data.toString().split("\n");
  lines.forEach(function(line) {
    if(line === "") return;
    var tokens = line.split(diameter);
    var converted = convertToRoman(tokens[0]);
    console.log(tokens[0] + " = " + converted + " " + ((converted === tokens[1])?"Correct" : "Incorrect"));
  });
});
