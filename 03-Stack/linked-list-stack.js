class Node {
  static size = 0;
  constructor(data) {
    this.data = data;
    this.next = null;

    Node.size++;
  }

  static addNode(data) {
    // this.size++;
    return new Node(data);
  }

  static printList(head) {
    let curr = head;
    let output = "";
    while (curr !== null) {
      output += curr.data;
      if (curr.next !== null) output += "->";
      curr = curr.next;
    }
    console.log(output);
  }
}

class Stack {
  constructor() {
    // serves as the head of linked list
    this.top = null;
  }
  push(element) {
    let oldHead = this.top;
    // new head
    this.top = Node.addNode(element);
    // new heads next point to old head
    this.top.next = oldHead;
  }

  pop() {
    // prevent underflow
    if (this.top === null) throw new Error("Stack underflow");
    const newHead = this.top.next;
    // store current top in a temp pointer
    let oldHead = this.top;
    let value = oldHead.data
    // move the top pointer to the next node
    this.top = newHead;
    // delete temp node pointer to free memory
    oldHead = null;

    // update size
    Node.size--
    return value;
  }
  peek() {
    if(this.top === null) throw new Error("Stack underflow")
    return this.top.data;
  }

  size() {
    return Node.size
  }

  isEmpty() {
    return this.top === null
  }
}
let s1 = new Stack();
s1.push(10);
s1.push(20);
s1.push(30);
s1.push(40);

Node.printList(s1.top);

console.log("Top: " + s1.peek());
console.log("Popped: " + s1.pop());
console.log("Top: " + s1.peek());
console.log("Is stack empty: " + (s1.isEmpty? "Yes": "No"))
console.log("Size: " + s1.size());
console.log("Stack after pop")
Node.printList(s1.top);
console.log("Size: " + s1.size());
