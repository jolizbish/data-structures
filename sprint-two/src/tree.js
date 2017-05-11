var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  
  var isContained = function(family, targetVal) {
    if (family.value === targetVal) {
      return true;
    } else if (family.children !== null) {
      var result = false;
      for (var i = 0; result === false && i < family.children.length; i++) {
        result = isContained(family.children[i], targetVal);
      }
      return result;
    }
  };
  
  return isContained(this, target);

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
