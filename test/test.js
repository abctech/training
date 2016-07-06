"use strict";

const assert = require('chai').assert;
const kataRoman = require('../kataRoman');

describe('#arabicToRoman()', () => {
    it('should convert a number for each alphabet', () => {
        assert.equal(kataRoman.arabicToRoman('1'), 'I');
        assert.equal(kataRoman.arabicToRoman('50'), 'L');
    });

    it('should convert number strings with commas', () => {
        assert.equal(kataRoman.arabicToRoman('1,000'), 'M');
        assert.equal(kataRoman.arabicToRoman('1,234'), 'MCCXXXIV');
    });

    it('should convert numbers that contain only 0, 1, and 5', () => {
        assert.equal(kataRoman.arabicToRoman('15'), 'XV');
        assert.equal(kataRoman.arabicToRoman('1,501'), 'MDI');
        assert.equal(kataRoman.arabicToRoman('1,005'), 'MV');
    });

    it('should convert numbers that contain only 4 and 9', () => {
        assert.equal(kataRoman.arabicToRoman('4'), 'IV');
        assert.equal(kataRoman.arabicToRoman('499'), 'CDXCIX');
        assert.equal(kataRoman.arabicToRoman('444'), 'CDXLIV');
    });

    it('should convert any numbers', () => {
        assert.equal(kataRoman.arabicToRoman('2,450'), 'MMCDL');
        assert.equal(kataRoman.arabicToRoman('745'), 'DCCXLV');
    });
});

describe('#extractDigit()', () => {
    it('should return the digit padded with zeroes', () => {
        assert.equal(kataRoman.extractDigit('1', 0, ['1', '3', '4', '0']), '1000');
        assert.equal(kataRoman.extractDigit('5', 2, ['3', '4', '5']), '5');
        assert.equal(kataRoman.extractDigit('0', 3, ['2', '3', '4', '0']), '0');
    });
});

describe('#arabicDigitToRoman()', () => {
    it('should convert the input to the Roman format', () => {
        assert.equal(kataRoman.arabicDigitToRoman('3000'), 'MMM');
    });
});

describe('#romanToArabic()', () => {
    it('should convert Roman numbers to Arabic numbers', () => {
        assert.equal(kataRoman.romanToArabic('I'), 1);
        assert.equal(kataRoman.romanToArabic('II'), 2);
        assert.equal(kataRoman.romanToArabic('MCCLIV'), 1254);
        assert.equal(kataRoman.romanToArabic('MMCDL'), 2450);
        assert.equal(kataRoman.romanToArabic('DCCXLV'), 745);
        assert.equal(kataRoman.romanToArabic('DCCXLII'), 742);
        assert.equal(kataRoman.romanToArabic('DCCXLIII'), 743);
        assert.equal(kataRoman.romanToArabic('DXLVIII'), 548);
    });

    it('should return an integer', () => {
        assert.isNumber(kataRoman.romanToArabic('I'));
    });
});
