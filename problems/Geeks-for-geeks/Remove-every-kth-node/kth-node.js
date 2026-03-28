class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  static addNode(data) {
    return new Node(data);
  }

  static removeEveryKthNode(head, k) {
    // remove every node that divisible by kth
    let curr = head;
    let prev = null,
      next = null;
    let isDivisible = curr.data % k === 0;

    while (!isDivisible) {
      isDivisible = curr.next.data % k === 0;
      prev = curr;
      curr = curr.next;
    }

    // skip current is the node whose data is divisible by k
    next = curr.next;
    prev.next = next;

    

    return head
  }

  static printList(head) {
    let curr = head;
    let output = "";
    while (curr !== null) {
      output += curr.data;
      if(curr.next) output += "->"
      curr = curr.next;
    }

    return output;
  }
}

let head = Node.addNode(1);
head.next = Node.addNode(2);
head.next.next = Node.addNode(3);
head.next.next.next = Node.addNode(4);
head.next.next.next.next = Node.addNode(5);
head.next.next.next.next.next = Node.addNode(6);

console.log("Before removal")
console.log(Node.printList(head));


console.log("After removal");
console.log(Node.printList(head));
