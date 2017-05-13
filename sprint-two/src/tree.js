var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);

  newTree.children = [];  // fix me
  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  newChild.parent = this.value;
  this.children.push(newChild);
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

  treeMethods.removeFromParent = function() {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].parent = null;
    }
    this.value = null;
  };

  return isContained(this, target);

};

treeMethods.traverse = function(cb) {
  console.log('this.children', this);
  var recursive = function(node) {
    if (node.value) {
      cb(node.value);
    }
    if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        recursive(node.children[i]);
      }
    }
  };
  recursive(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
