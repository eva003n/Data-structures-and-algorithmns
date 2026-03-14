// implementing queue with a fixed size array
/**
 * This implementation is efficient because dequeue takes Time O(1) Space O(1) 
 * The problem with this implementation is the queue will always be full because we are just ignoring the first element to simulate dequeue
 * That why a better approach to implement queue is not to use simple array but rather  circular array
 */
class Queue {
  constructor(cap) {
    // storage
    this.arr = new Array(cap);
    // front pointer to keep tack of the next element added to due
    this.front = 0;
    // represent rear, insertion point
    this.size = 0;

    // maximum size of the array
    this.capacity = cap;
  }

  enqueue(data) {
    //prevent queue overflow
    if (this.isFull()) {
      throw new Error("Queue overflow");
    }

    // insert element at rear/back of queue(Time O(1) space O(1))
    this.arr[this.size++] = data;
    return data;
  }

  dequeue() {
    //prevent underflow
    if (this.isEmpty()) {
      throw new Error("Queue underflow");
    }

    let value = this.arr[this.front];
    // remove element from front(Time O(1) space(1))
    this.front++;
    // this.size--;
    return value;
  }

  getFront() {
    //prevent underflow
    if (this.isEmpty()) {
      console.error("Queue underflow, empty queue");
      return -1;
    }
    //element at front (Time O(1) space O(1))
    return this.arr[this.front];
  }
  getRear() {
    //prevent underflow
    if (this.isEmpty()) {
      console.error("Queue underflow, empty queue");
      return -1;
    }
    //element at front (Time O(1) space O(1))
    let rear = this.size - 1;
    return this.arr[rear];
  }

  isFull() {
    return this.size === this.capacity;
  }
  isEmpty() {
    return this.size === 0;
  }
}

const q1 = new Queue(4);
q1.enqueue(10);
q1.enqueue(20);
q1.enqueue(30);
q1.enqueue(40);

console.log("Dequeued: " + q1.dequeue());
console.log(`Front: ${q1.getFront()}`, `Rear: ${q1.getRear()}`);
console.log("Is queue empty: " + (q1.isEmpty() ? "Yes" : "No"));
console.log("Is queue full: " + (q1.isFull() ? "Yes" : "No"));
console.log("Enqueued: " + q1.enqueue(50));

console.log(`Front: ${q1.getFront()}`, `Rear: ${q1.getRear()}`);
console.log("Dequeued: " + q1.dequeue());
console.log("Enqueued: " + q1.enqueue(60));

console.log(`Front: ${q1.getFront()}`, `Rear: ${q1.getRear()}`);
console.log("Dequeued: " + q1.dequeue());
console.log("Enqueued: " + q1.enqueue(70));
console.log(`Front: ${q1.getFront()}`, `Rear: ${q1.getRear()}`);
