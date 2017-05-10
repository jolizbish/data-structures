var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  this.storage = {};
  this.items = 0;
  
};

Stack.prototype.size = function() {
  return this.items;
};

Stack.prototype.push = function(value) {
  this.items++;
  this.storage[this.size() - 1] = value;
};

Stack.prototype.pop = function() {
  if (this.items === 0) {
    return 0;
  } else {
    var popped = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    this.items--;
    return popped;
  }
  return this.items;
};