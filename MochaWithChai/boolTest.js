var chai = require('chai');
assert = chai.assert;

const func = require('./code.js');

describe('Boolean testing', function(){
  it('boolean testing with isTrue and isNotTrue', ()=>{
    assert.isTrue(true);
    assert.isNotTrue(false);
  });

  it('boolean testing with isFalse and isNotFalse', ()=>{
    assert.isFalse(false);
    assert.isNotFalse(true);
  });

  it('boolean testing with values returned from function calls', ()=>{
    assert.isTrue(func.is_even(224));
    assert.isNotTrue(func.is_even(225));

    assert.isFalse(func.is_even(225));
    assert.isNotFalse(func.is_even(224));
  });

  it('using comments with assert to know where failure occurs', ()=>{
    assert.isBoolean(func.return_string(), 'should return a boolean!');
    assert.isTrue(func.is_even(225),  'should be true!');
    assert.isBoolean(func.is_even(225));
    assert.isFalse(func.is_even(224), ' should be false!');
  });

})