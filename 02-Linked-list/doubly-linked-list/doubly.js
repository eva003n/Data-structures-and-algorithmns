class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }

  static addNode(data) {
    return new Node(data);
  }

  static printListFromStart(head) {
    let curr = head;
    let output = "";
    while (curr !== null) {
      output += curr.data;
      if (curr.next !== null) output += " <-> ";

      curr = curr.next;
    }
    return output;
  }
  static printListFromEnd(tail) {
    let curr = tail;
    let output = "";
    while (curr !== null) {
      output += curr.data;
      if (curr.prev !== null) output += " <-> ";

      curr = curr.prev;
    }
    return output;
  }
}

const head = Node.addNode(10);
head.prev = null;
// second node
head.next = Node.addNode(20);
head.next.prev = head;
// third node
head.next.next = Node.addNode(30);
head.next.next.prev = head.next;
// forth node
head.next.next.next = Node.addNode(40);
head.next.next.next.prev = head.next.next;
// fifth node
head.next.next.next.next = Node.addNode(50);
head.next.next.next.next.prev = head.next.next.next;

const tail = head.next.next.next.next;
console.log(Node.printListFromStart(head));
console.log(Node.printListFromEnd(tail));
