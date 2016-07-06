"use strict";

const assert = require('chai').assert;
const kataRoman = require('../kataRoman');

describe('Convert numbers that contain only 0, 1, and 5', function() {
    describe('Convert numbers that are contained in the mapping (no commas)', function() {
        describe('arabicToRoman()', function() {
            it('The converted Roman numbers should be correct', function() {
                assert.equal(kataRoman.arabicToRoman('1'), 'I');
                assert.equal(kataRoman.arabicToRoman('50'), 'L');
            });
        });
    });

    describe('Convert numbers with a comma', function() {
        describe('arabicToRoman()', function() {
            it('Conversion should be correct', function() {
                assert.equal(kataRoman.arabicToRoman('1,000'), 'M');
            });
        });
    });
});
