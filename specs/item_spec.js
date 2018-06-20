var assert = require('assert');
var Item = require('../item.js');

describe('Item', function() {

  var item;

  beforeEach(function() {
    item = new Item('Carrot', 1.00, true);
  });

  it('should have a description of carrot', function() {
    assert.strictEqual(item.description, 'Carrot');
  });

  it('should have a price of 1.00', function() {
    assert.strictEqual(item.price, 1.00);
  });

  it('should be available for buy one get one free', function() {
    assert.strictEqual(item.bogof, true);
  });

  it('should not be available for buy one get one free', function() {
    var crisps = new Item('Crisps', 0.70, false);
    assert.strictEqual(crisps.bogof, false);
  })

});
