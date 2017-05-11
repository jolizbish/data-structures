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
  this.children.push({'value': value, 'children': []});
  _.extend(this.children, treeMethods);
};

treeMethods.contains = function(target) {
  var isFound = false;
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      // console.log(this.children[i].value);
      isFound = true;
    } else if (this.children[i].children && this.children[i].children.length > 0) {
      this.children[i].children.contains(target);
    }
  }
  return isFound;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
