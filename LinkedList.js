function Node(key, val) {
  this.hash = {};
  this.key = key;
  this.val = val;
  this.prev = this.next = null;
}

function LinkedList() {
  this.hash = {};
  this.head = { next: null };
  this.tail = { prev: null };
  this.head.next = this.tail;
  this.tail.prev = this.head;
}

LinkedList.prototype.add = function(Node) {
  Node.prev = this.tail.prev;
  Node.next = this.tail;
  this.tail.prev.next = Node;
  this.tail.prev = Node;
  this.hash[Node.key] = Node;
}

LinkedList.prototype.remove = function(key) {
  var delNode = this.hash[key];
  delNode.prev.next = delNode.next;
  delNode.next.prev = delNode.prev;
  delNode.next = delNode.prev = null;
  delete this.hash[key];
}

LinkedList.prototype.map = function() {
  var res = [];
  var curr = this.head.next;
  while(curr !== this.tail) {
    res.push(curr.val);
    curr = curr.next;
  }
  return res;
}

var list = new LinkedList();
// var node = new Node(1,1)
// var node2 = new Node(2,2)
// var node3 = new Node(3,3)
// list.add(node);
// list.add(node2);
// list.add(node3);
// // list.remove(3)
// var x = list.map()
// console.log(x)

module.exports = {
  LinkedList,
  Node,
  list,
}
