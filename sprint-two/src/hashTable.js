

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // // this._storage[index][k] = v;
  // this._storage[k] = {index: v};
  // console.log('k', k);
  // console.log('v', v);
  // console.log('index', index);
  // //console.log('HashTable', hashTable);
  // console.log('storage', this._storage);
  var bucket = this._storage[index];
  if (!bucket) {
    var bucket = [];
    this._storage[index] = bucket;
  }
  var overwrite = false;
  
  for (var i = 0; i < bucket.length; i++) {
    var list = bucket[i];
    if (list[0] === k) {
      list[1] = v;
      overwrite = true;
    }
  }
  
  if (!overwrite) {
    bucket.push([k, v]);
  }
  
  // return this; 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


