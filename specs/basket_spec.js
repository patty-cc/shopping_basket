var assert = require('assert');
var Basket = require('../basket.js');
var Item = require('../item.js');

describe('Basket', function() {

  var basket;
  var carrot;
  var crisps;

  beforeEach( function() {
    basket = new Basket();
    carrot = new Item( 'carrot', 1.00);
    crisps = new Item('crisps', 0.70);
  });

  it('should be empty to start with', function() {
    assert.strictEqual(basket.items.length, 0);
  });

  it('should be able to add item to the basket', function() {
    basket.addItem(carrot);
    basket.addItem(crisps);
    assert.strictEqual(basket.items.length, 2);
  })

  it('should be able to remove an item from the basket', function() {
    basket.addItem(carrot);
    basket.addItem(crisps);
    basket.removeItem(carrot);
    assert.strictEqual(basket.items.length, 1);
  })
})
