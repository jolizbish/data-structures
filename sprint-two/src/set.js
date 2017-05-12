var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this.storage.push(item);
  }
};

setPrototype.contains = function(item) {
  var isInSet = false;
  for (var i = 0; i < this.storage.length; i++) {
    if (item === this.storage[i]) {
      isInSet = true;
    }
  }
  return isInSet;
};

setPrototype.remove = function(item) {
  var index;
  for (var i = 0; i < this.storage.length; i++) {
    if (item === this.storage[i]) {
      index = i;
    }
  }
  this.storage.splice(index, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
