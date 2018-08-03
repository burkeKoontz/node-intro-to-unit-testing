'use strict';

const expect = require('chai').expect;

// import Fizzbuzzer
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  it('should return fizzbuzz if divisible by 15', function() {
    const normalCases = [{a : 15, expected: 'fizz-buzz'} , {a : 30, expected: 'fizz-buzz'}, {a : 45, expected: 'fizz-buzz'}];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return buzz if divisible by 5', function() {
    const normalCases = [{a : 5, expected: 'buzz'} , {a : 50, expected: 'buzz'}, {a : 25, expected: 'buzz'}];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return fizz if divisible by 3', function() {
    const normalCases = [{a : 3, expected: 'fizz'} , {a : 9, expected: 'fizz'}, {a : 12, expected: 'fizz'}];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return itself if it is not divisible by 3 or 5', function() {
    const normalCases = [{a : 4, expected: 4} , {a : 28, expected: 28}, {a : 58, expected: 58}];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise an error if the argument was not a number', function() {
    const errorInputs = ['b', true, NaN, null, undefined, Object];
    errorInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });

});

