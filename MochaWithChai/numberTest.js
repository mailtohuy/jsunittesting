const { assert } = require('chai');
var chai = require('chai');
assert = chai.assert;

const func = require('./code.js');

describe('Number testing', ()=>{
  it('tests that use isNumber and isNotNumber', ()=>{
    assert.isNumber(10);
    assert.isNotNumber("10");
  })


})