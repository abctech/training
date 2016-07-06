"use strict";

const assert = require('chai').assert;
const kataRoman = require('../kataRoman');

describe('Convert Arabic to Roman', function() {
    describe('arabicToRoman()', function() {
        it('The converted Roman numbers should be correct.', function() {
            assert.equal(kataRoman.arabicToRoman('1'), 'I');
            assert.equal(kataRoman.arabicToRoman('1,000'), 'M');
        });
    });
});
