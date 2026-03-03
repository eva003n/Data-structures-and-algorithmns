class Node {
  data;
  next;

  constructor(data) {
    this.data = data;
    this.next = null;
  }

  static addNode(data) {
    return new Node(data);
  }

  static printLinkedList(head) {
    while (head !== null) {
      process.stdout.write(head.data.toString());

      if (head.next) process.stdout.write(`->`);

      // move to next element
      head = head.next;
    }

    // process.stdout.end()
    console.log();
  }

  static insertAtEnd(head, data) {
    // create a new node
    const newNode = new Node(data);
    // store head in a temp variable
    let last = head;

    // if linked list is empty add the newly created node
    if (head === null) return newNode;

    // traverse till last node
    while (last.next !== null) {
      // move to next element
      last = last.next;
    }
    // link the last's node next to the new node
    last.next = newNode;

    // return the head of the list
    return head;
  }
}

let head = Node.addNode(10);
head.next = Node.addNode(20);
head.next.next = Node.addNode(30);
head.next.next.next = Node.addNode(40);

head = Node.insertAtEnd(head, 100);
Node.printLinkedList(head);
