var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.items = 0;
  
  return someInstance;
};

queueMethods = {};

queueMethods.size = function() {
  return this.items;
};

queueMethods.enqueue = function(value) {
  this.items++;
  this.storage[this.size() - 1] = value;
};

queueMethods.dequeue = function() {
  if (this.items === 0) {
    return 0;
  } else {
    var dequeued = this.storage[0];
    delete this.storage[0];
    for (var key in this.storage) {
      if (this.storage[key] !== undefined) {
        this.storage[key - 1] = this.storage[key];
      }
    }
    this.items--;
    return dequeued;
  }
  return this.items;
};
