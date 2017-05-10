// var extend = function(to, from) {
//   for (var key in from) {
//     to[key] = from[key];
//   }
// };

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  
  // storage = {};
  var someInstance = {};
  someInstance.storage = {};
  someInstance.items = 0;
  someInstance.size = stackMethods.size;
  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  
  // _.extend(someInstance, Stack.methods);
  
  return someInstance;
};

var stackMethods = {};
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



