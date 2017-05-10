var Stack = function() {
  var someInstance = {
    'items' : 0
  };

  // Use an object with numeric keys to store values
  var storage = {};
  // var test = someInstance.size().toString();

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.items++;
    storage[someInstance.size() - 1] = value;
  };
//  console.log('storage', storage);
  someInstance.pop = function() {
    if (someInstance.items === 0) {
      return 0;
    } else {
      var popped = storage[someInstance.size() - 1];
      delete storage[someInstance.size() - 1];
      someInstance.items--;
      return popped;
    }
  };

  someInstance.size = function() {
    return someInstance.items;
  };
  
    // console.log(someInstance.size().toString());
  return someInstance;
};