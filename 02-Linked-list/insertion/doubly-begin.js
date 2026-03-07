class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }

  static addNode(data) {
    return new Node(data);
  }

  static addAtStart(head, data) {
    // when list is empty
    if(head !== null) return null

    let newHead = this.addNode(data);
    newHead.next = head;
    return newHead;
  }
  static printList(head) {
    let curr = head,
      output = "";
    while (curr !== null) {
      output += curr.data;
      if (curr.next !== null) output += "<->";
      curr = curr.next;
    }

    return output
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


console.log("Before insert")
console.log(Node.printList(head));
head = Node.addAtStart(head, 100)
console.log("After insert");
console.log(Node.printList(head))

