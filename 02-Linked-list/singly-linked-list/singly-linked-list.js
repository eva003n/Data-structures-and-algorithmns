const stdout = require("process").stdout;
class Node {
  data;
  next;

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const head = new Node(10);
head.next = new Node(40);
head.next.next = new Node(30);
head.next.next.next = new Node(20);

let node = head;
while (node !== null) {
  stdout.write(node.data + " ");

  node = node.next;
}

stdout.end();

