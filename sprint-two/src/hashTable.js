

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    var bucket = [];
    this._storage[index] = bucket;
    var tuple = [k, v];
    this._storage[index].push(tuple);
  } else {
    var containsK = false;
    var tupleIndex = null;
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        containsK = true;
        tupleIndex = i;
      }
    } 
    if (containsK) {
      this._storage[index][tupleIndex][1] = v;
    } else {
      var tuple = [k, v];
      this._storage[index].push(tuple);
    }
  }
  console.log('bucket', bucket);
  console.log('tuple', tuple);
  console.log('storage', this._storage);
  console.log('k', k);
  console.log('v', v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


