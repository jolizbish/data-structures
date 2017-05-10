var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.items = 0;
  
  return someInstance;
};

stackMethods = {};

stackMethods.size = function() {
  return this.items;
};

stackMethods.push = function(value) {
  this.items++;
  this.storage[this.size() - 1] = value;
};

stackMethods.pop = function() {
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