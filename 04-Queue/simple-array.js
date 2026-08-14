// implementing queue with a fixed size array
/**
 * The problem with this implementation is that the dequeue takes time O(n) which is not acceptable, both enqueue and dequeue should take Time of O(1)
 * That why a better approach to implement queue is not to use simple array but rather  circular array
 */
class Queue {
  constructor(cap) {
    // storage
    this.arr = new Array(cap);
    // front pointer to keep tack of the next element added to due
    this.front = 0;
    this.rear = 0;
    // size of the queue
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
    this.arr[this.rear++] = data;
    this.size++;
    return data;
  }

  dequeue() {
    //prevent underflow
    if (this.isEmpty()) {
      throw new Error("Queue underflow");
    }

    // remove element from front(Time O(n) space(1))
    let value = this.arr[this.front];
    //length of array
    //   shiting all the elements that come after first element to the left
    let i = 1;
    for (i; i < this.capacity; i++) {
      this.arr[i - 1] = this.arr[i];
    }
    this.rear--;
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
    //element at rear (Time O(1) space O(1))
    let rear = this.rear - 1;
    return this.arr[rear];
  }

  isFull() {
    return this.size === this.capacity;
  }
  isEmpty() {
    return this.size === 0;
  }
}

const q1 = new Queue(5);
const arr = [10, 20, 30, 40, 50];

arr.forEach((element, index, array) => {
  q1.enqueue(element);
});

console.log(q1.arr);
console.log(`Front: ${q1.getFront()}`, `Rear: ${q1.getRear()}`);
console.log("Dequeued: " + q1.dequeue());
console.log("Dequeued: " + q1.dequeue());
console.log("Dequeued: " + q1.dequeue());
console.log("Dequeued: " + q1.dequeue());
console.log("Dequeued: " + q1.dequeue());
console.log(q1.arr);


q1.enqueue(90);

// console.log("Is queue empty: " + (q1.isEmpty() ? "Yes" : "No"));
