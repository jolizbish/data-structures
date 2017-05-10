var Queue = function() {
  var someInstance = {
    'items': 0
  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance.items++;
    storage[someInstance.size() - 1] = value;
  };

  someInstance.dequeue = function() {
    if (someInstance.items === 0) {
      return 0;
    } else {
      var dequeued = storage[0];
      for (var key in storage) {
        storage[key] = storage[key + 1];
        delete storage[someInstance.size()];
      }
      someInstance.items--;
      return dequeued;
    }
  };

  someInstance.size = function() {
    return someInstance.items;
  };

  return someInstance;
};
