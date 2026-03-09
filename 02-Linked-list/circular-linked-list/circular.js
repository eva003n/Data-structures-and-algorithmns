class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  static printLinkedList(head) {
    let curr = head;
    let output = "";

    // empty list
    if(head === null) return null
    do {
      // enable printing last node before the condition is checked
      output += curr.data;
      // add arrow as long as the next node is not the head
      if (curr.next !== head) output += "->";
      // move to the next node
      curr = curr.next;
    } while(curr !== head);

    return output;
  }
}

const head = new Node(10);
head.next = new Node(40);
head.next.next = new Node(30);
head.next.next.next = new Node(20);
head.next.next.next.next = head;

console.log(Node.printLinkedList(head));
