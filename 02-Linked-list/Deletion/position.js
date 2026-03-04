class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  static addNode(data) {
    return new Node(data);
  }
  static deleteAtPosition(pos, head) {
    let currNode = head;
    // when list is empty
    if (head === null) {
      return null;
    }
    // when postion is the first node we update the pointer to point to next node
    if (pos === 1) {
      let newHead = head.next;
      // delete current head
      head = null
      return newHead;
    }

    let prevNode = null
    for (let i = 1; i < pos && currNode !== null; i++) {
      // traverse until the current node is before the node to be deleted
      prevNode = currNode
      // node to be deleted
      currNode = currNode.next;
    }

    // when position is greater than list length
    if (currNode === null) return head;
    // node to be deleted
    let temp = currNode;
    // node after the node to be deleted
    let afterNode = currNode.next;

    // delete node at position
    temp = null;

    // joing before node to after node ignoring node at position
    prevNode.next = afterNode;
    // return new head
    return head;
  }

  static printList(head) {
    let currNode = head;
    while (currNode !== null) {
      process.stdout.write(currNode.data.toString());

      if (currNode.next) process.stdout.write("->");

      currNode = currNode.next;
    }
    console.log();
  }
}

let head = Node.addNode(10);
head.next = Node.addNode(20);
head.next.next = Node.addNode(30);
head.next.next.next = Node.addNode(40);

console.log("Befoe deletion");
Node.printList(head);
console.log("After deletion");
head = Node.deleteAtPosition(2, head);
Node.printList(head);
