// implementing queue with a fixed size array
/**
 * The problem with this implementation is that the dequeue takes time O(n) which is not acceptable, both enqueue and dequeue should take Time of O(1) 
 * That why a better approach to implement queue is not to use simple queue but rather  circular queue
 * In simple queue we also waste space
 */
class Queue {
  constructor(cap) {
    // storage
    this.arr = new Array(cap);
    // front pointer to keep tack of the next element added to due
    this.front = 0
    // represent rear, insertion point
    this.size = 0

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
  }

  dequeue() {
    //prevent underflow
    if (this.isEmpty()) {
      throw new Error("Queue underflow");
    }

    // remove element from front(Time O(n) space(1))
    let value = this.arr[this.front]
    this.arr = shift(this.arr);
    this.size--

    return value
  }

  getFront() {
    //prevent underflow
    if (this.isEmpty()) {
      console.error("Queue underflow, empty queue");
      return -1
    }
    //element at front (Time O(1) space O(1))
    return this.arr[this.front];
  }
  getRear() {
    //prevent underflow
    if (this.isEmpty()) {
      console.error("Queue underflow, empty queue");
      return -1
    }
    //element at front (Time O(1) space O(1))
    console.log(this.size)
    return this.arr[this.size];
  }

  isFull() {
    return this.size === this.cap - 1;
  }
  isEmpty() {
    return this.size === 0;
  }
}

function shift(arr) {
  //length of array
  let n = arr.length;
//   shiting all the elements that come after first element to the left
  for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }
  // elements deleted are replaced by 0 since this is a fixed array
  return arr;
}

let q1 = new Queue(4);
q1.enqueue(10);
q1.enqueue(20);
q1.enqueue(30);
q1.enqueue(40);

console.log("Dequeued: " + q1.dequeue());
console.log("Front: " + q1.getFront());
console.log("Rear: " + q1.getRear());
console.log("Is queue empty: " + (q1.isEmpty() ? "Yes" : "No"));
console.log("Is queue full: " + (q1.isFull() ? "Yes" : "No"));
q1.enqueue(50)
console.log(q1.arr)
console.log("Dequeued: " + q1.dequeue());
console.log(q1.arr)
q1.enqueue(60)

console.log("Front: " + q1.getFront());
console.log("Rear: " + q1.getRear());

