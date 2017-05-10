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
    console.log('top storage', storage);
    if (someInstance.items === 0) {
      return 0;
    } else {
      var dequeued = storage[0];
      delete storage[0];
      for (var key in storage) {
        console.log('key', key);
        if (storage[key] !== undefined) {
          storage[key - 1] = storage[key];
        }
      }
      delete storage[someInstance.size() - 1];
      someInstance.items--;
      console.log('storage', storage);
      return dequeued;
    }
  };

  someInstance.size = function() {
    return someInstance.items;
  };

  return someInstance;
};
