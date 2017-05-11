var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    list.tail = Node(value);
    if (list.head === null) {
      list.head = list.tail;
    } else if (list.head.next === null) {
      list.head.next = list.tail;
    }
    // console.log('head: ', list.head);
    // console.log('tail: ', list.tail);
    // console.log('list.head.next: ', list.head.next);
  };
  
  list.removeHead = function() {
    var oldHead = list.head;
    list.head = list.head.next;
    return oldHead.value;
  };

  list.contains = function(target) {
    var current = list.head;
    console.log('current: ', current.value);
    console.log('target: ', target);
    while (current !== null) {
      if (current.value === target) {
        return true;
      } else if (current.next === null) {
        return false;
      } else {
        current = current.next;
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

// add test comment to make sure pushes are going ot hte right place