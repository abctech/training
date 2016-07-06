"use strict";

const assert = require('chai').assert;
const kataRoman = require('../kataRoman');

describe('Convert Arabic to Roman', function() {
    describe('Convert numbers that are contained in the mapping', function() {
        it('No commas', function() {
            assert.equal(kataRoman.arabicToRoman('1'), 'I');
            assert.equal(kataRoman.arabicToRoman('50'), 'L');
        });

        it('With commas', function() {
            assert.equal(kataRoman.arabicToRoman('1,000'), 'M');
        });
    });

    it('Convert numbers that contain only 0, 1, and 5 (with commas)', function() {
        assert.equal(kataRoman.arabicToRoman('15'), 'XV');
    });

    it('Convert any numbers (with commas)', function() {
        assert.equal(kataRoman.arabicToRoman('4'), 'IV');
    });
});
