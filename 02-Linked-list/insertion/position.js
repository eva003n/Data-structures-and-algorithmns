class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  static addNode(data) {
    return new Node(data);
  }

  static insertAtPosition(head, pos, value) {
    // when position is the head
    if (pos === 1) {
      // make new node the head
      newNode.next = head;
      // return new head
      return newNode;
    }

    let curr = head;
    // traverse untill the node before pos
    for (let i = 1; i < pos - 1 && curr !== null; i++) {
      // move to next node in list
      curr = curr.next;
    }

    // if position is greater than number of nodes
    if (curr === null) return head;

    // create new node
    const newNode = new Node(value);

    //update pointers
    newNode.next = curr.next;
    curr.next = newNode;

    // return new head
    return head;
  }

  static printLinkedList(head) {
    while (head !== null) {
      process.stdout.write(head.data.toString());

      if (head.next) process.stdout.write(`->`);
      // move to next node
      head = head.next;
    }
    console.log();
  }
}

let head = Node.addNode(10);
head.next = Node.addNode(20);
head.next.next = Node.addNode(30);
head.next.next.next = Node.addNode(40);

Node.printLinkedList(head);
head = Node.insertAtPosition(head, 3, 100);
Node.printLinkedList(head);
