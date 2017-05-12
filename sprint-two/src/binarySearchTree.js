var BinarySearchTree = function(value) {
  var instance = Object.create(BinarySearchTree.prototype);
  instance.value = value;
  instance.left = undefined;
  instance.right = undefined;
  return instance;
};

BinarySearchTree.prototype.insert = function(value) { 
  var node = BinarySearchTree(value);
  
  var recursive = function(branch) {
    if (branch.value > value && (!branch.left)) {
      branch.left = node;
    } else if (branch.value > value) {
      recursive(branch.left);
    } else if (branch.value < value && (!branch.right)) {
      branch.right = node;
    } else if (branch.value < value) {
      recursive(branch.right);
    }
  };
  
  recursive(this);
  
};

BinarySearchTree.prototype.contains = function(value) {
  var result = false;
  var recursiveSearch = function(branch) {
    if (branch.value === value) {
      result = true;
    } else if (branch.left !== undefined && branch.value > value) {
      recursiveSearch(branch.left);
    } else if (branch.right !== undefined && branch.value < value) {
      recursiveSearch(branch.right);
    }
  };
  
  recursiveSearch(this);
  return result;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var recursiveCB = function(node) {
    if (node.value) {
      cb(node.value);
    }
    if (node.left) {
      recursiveCB(node.left);
    }
    if (node.right) {
      recursiveCB(node.right);
    }
  };
  recursiveCB(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
