var chai = require('chai');
const expect = chai.expect;
chai.should();

const listUtility =require ('./list_utility_async.js');

var items = ['milk', 'bread', 'cookies'];

describe('testing async function', ()=>{
  it('expects list to be initiated',async function() {
    expect(await listUtility.setList(items), 'should use async await').deep.equal(items);
  });

  it('should add item to list', async function() {
    (await listUtility.addItem('coffee')).should.deep.equal(['milk', 'bread', 'cookies', 'coffee']);
  });
});
