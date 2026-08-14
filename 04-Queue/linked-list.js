
// this is the storage for the queue
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    // pointer to tail of linked list
    this.tail = null;
    // head of linked list
    this.head = null;

    this.size = 0
  }

  // Time O(1) Space O(1)
  // insert at tail
  enqueue(element) {
    // create a node
    const newNode = new Node(element);
    // when queue is empty both head and tail point to new node
    if(this.head == null && this.tail == null){
        this.head = newNode
        this.tail = newNode
    }else {
      // current tail's next points to new node
      this.tail.next = newNode
      //update tail to point to new node
      this.tail = newNode
    }
    // update size
    this.size++
    return newNode.data

  }
  // Time O(1) Space O(1)
  dequeue() {
    // update the current head

    let oldHead = this.head;
    let value = oldHead.data
    // update the head to point to next node in list
    this.head = oldHead.next;

    //when one element is left
    if(this.head === null) {
      this.tail = null
    }
    // free memory for the current head
    oldHead = null;
    // update size
    this.size--
    return value
  }

  gethead() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return -1;
    }

    return this.head.data;
  }

  gettail() {
    if(this.isEmpty()) {
      console.log("Queue is empty")
      return -1
    }

    return this.tail.data;
  }

  isEmpty() {
    return this.head === null;
  }
  
  _size () {
    return this.size
  }
 
}

const q1 = new Queue();
q1.enqueue(10);
q1.enqueue(20);
q1.enqueue(30);
q1.enqueue(40);

console.log(`head: ${q1.gethead()}`, `tail: ${q1.gettail()}`);
console.log("Dequeued: ", q1.dequeue());
console.log(`head: ${q1.gethead()}`, `tail: ${q1.gettail()}`);
console.log("Dequeued: ", q1.dequeue());
console.log(`head: ${q1.gethead()}`, `tail: ${q1.gettail()}`);
console.log("Enqueued", q1.enqueue(50));
console.log(`head: ${q1.gethead()}`, `tail: ${q1.gettail()}`);
console.log("Enqueued", q1.enqueue(60));
console.log(`head: ${q1.gethead()}`, `tail: ${q1.gettail()}`);

