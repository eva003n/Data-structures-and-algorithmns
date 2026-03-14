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
    this.rear = null;
    // head of linked list
    this.front = null;

    this.size = 0
  }

  // Time O(1) Space O(1)
  // insert at rear
  enqueue(element) {
    // create a node
    const newNode = new Node(element);
    // when queue is empty both front and rear point to new node
    if(this.front == null && this.rear == null){
        this.front = newNode
        this.rear = newNode
    }else {
      // current rear's next points to new node
      this.rear.next = newNode
      //update rear to point to new node
      this.rear = newNode
    }
    // update size
    this.size++
    return newNode.data

  }
  // Time O(1) Space O(1)
  dequeue() {
    // update the current head

    let oldHead = this.front;
    let value = oldHead.data
    // update the head to point to next node in list
    this.front = oldHead.next;

    //when one element is left
    if(this.front === null) {
      this.rear = null
    }
    // free memory for the current head
    oldHead = null;
    // update size
    this.size--
    return value
  }

  getFront() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return -1;
    }

    return this.front.data;
  }

  getRear() {
    if(this.isEmpty()) {
      console.log("Queue is empty")
      return -1
    }

    return this.rear.data;
  }

  isEmpty() {
    return this.front === null;
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

console.log(`Front: ${q1.getFront()}`, `Rear: ${q1.getRear()}`);
console.log("Dequeued: ", q1.dequeue());
console.log(`Front: ${q1.getFront()}`, `Rear: ${q1.getRear()}`);
console.log("Dequeued: ", q1.dequeue());
console.log(`Front: ${q1.getFront()}`, `Rear: ${q1.getRear()}`);
console.log("Enqueued", q1.enqueue(50));
console.log(`Front: ${q1.getFront()}`, `Rear: ${q1.getRear()}`);
console.log("Enqueued", q1.enqueue(60));
console.log(`Front: ${q1.getFront()}`, `Rear: ${q1.getRear()}`);

