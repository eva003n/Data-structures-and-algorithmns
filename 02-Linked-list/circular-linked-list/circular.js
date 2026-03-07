class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  static printLinkedList(head) {
    let node = head;
    let output = "";
    while (node !== null) {
      output += node.data;
      if (node.next) output += "->";

      node = node.next;
    }
    return output;
  }
}

const head = new Node(10);
head.next = new Node(40);
head.next.next = new Node(30);
head.next.next.next = new Node(20);
head.next.next.next.next = head

console.log(Node.printLinkedList(head))