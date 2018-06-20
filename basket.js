var Basket = function() {
  this.items = [];
}

Basket.prototype.addItem = function(item) {
  this.items.push(item);
};

Basket.prototype.removeItem = function(item) {
  this.items.pop(item);
};

module.exports = Basket;
