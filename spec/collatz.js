var path = require('path');
var expect = require('chai').expect;

var collatz = require(path.join(__dirname, '..', './collatz.js'));

describe('collatz()', function () {
  'use strict';

  it('exists', function () {
    expect(collatz).to.be.a('function');

  });

  it('computes collatz of 4', function () {
    expect(collatz(4)).to.equal(2);
  });

  it('computes collatz of 3', function () {
    expect(collatz(3)).to.equal(10);
  });

  // Add more assertions here
  it('computes collatz of 9', function () {
    expect(collatz(9)).to.equal(28);
  });
  it('computes collatz of 5', function () {
    expect(collatz(10)).to.equal(5);
  });
});
