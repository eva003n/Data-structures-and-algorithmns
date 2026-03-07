class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = data;
  }

  static addNode(data) {
    return new Node(data);
  }

  static addAtEnd(head, data) {
    // when empty list
    if (head === null) return null;

    let curr = head;
    while (curr !== null) {
      curr = curr.next;
    }
    curr.next = this.addNode(data);

    return head;
  }

  static printList(head) {
    let curr = head,
      output = "";
      let i = 1
    while (curr !== null) {
        console.log(i++)
      output += curr.data;
      if (curr.next !== null) output += "<->";
      curr = curr.next;
    }

    return output;
  }
}

let head = Node.addNode(10);
head.prev = null;
// second node
head.next = Node.addNode(20);
head.next.prev = head;
head.next.next = Node.addNode(30);
// third
head.next.next.next = Node.addNode(40);
head.next.next.next.prev = head.next;
// forth
head.next.next.next.next = Node.addNode(50);
head.next.next.next.next.prev = head.next.next;

console.log("Before insert");
console.log(Node.printList(head));
head = Node.addAtEnd(head, 100);
console.log("After insert");
console.log(Node.printList(head));
