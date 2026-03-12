class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    // track queue size
    this.size = 0;
    // track the fron of queue(head of linked list)
    this.front = null;
  }

  // Time O(1) Space O(1)
  // insert at rear
  enqueue(element) {
    // create a node
    const newNode = new Node(element);

    // link the nodes
    if (this.front === null) {
      this.front = newNode;
    } else {
      this.front.next = newNode;
    }
    //update size
    this.size++;
  }
  // Time O(1) Space O(1)
  dequeue() {
    // update the current head
    let oldHead = this.front;
    // point to next node in list
    this.front = oldHead.next;

    // update size
    this.size--;
    // free memory
    oldhead = null;
  }

  getFront() {
    if (this.front === null) {
      console.log("Queue is empty");
      return -1;
    }

    return this.front.data;
  }

  getRear() {
    if (this.front === null) {
      console.log("Queue is empty");
      return -1;
    }

    let curr = this.front;
    while (curr.next !== null) {
      curr = curr.next;
    }

    return curr.data;
  }

  _size() {
    return this.size;
  }
}

const q1 = new Queue();
q1.enqueue(10);
q1.enqueue(20);
q1.enqueue(30);
q1.enqueue(40);

console.log(`Front: ${q1.getFront()}`, `Rear: ${q1.getRear()}`);
q1.dequeue();
console.log(`Front: ${q1.getFront()}`, `Rear: ${q1.getRear()}`);
q1.dequeue();
console.log(`Front: ${q1.getFront()}`, `Rear: ${q1.getRear()}`);