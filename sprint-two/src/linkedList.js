var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    list.tail = Node(value);
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    } else {
      var oldHead = list.head;
      list.head = Node(list.head.next);
      return oldHead;
    }
  };

  list.contains = function(target) {
    for (var key in list) {
      if (list[key] === target) {
        return true;
      } else {
        return false;
      }
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
