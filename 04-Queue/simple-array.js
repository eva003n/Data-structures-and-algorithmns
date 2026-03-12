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
    // track current size of queue
    this.size = 0;

    // front pointer to keep tack of the next element added to due
    this.front = 0;
    // maximum size of the array
    this.capacity = cap;
  }

  enqueue(data) {
    //prevent queue overflow
    if (this.size === this.cap - 1) {
      throw new Error("Queue overflow");
    }
    // insert element at rear/back of queue(Time O(1) space O(1))
    this.arr[this.size++] = data;
  }

  dequeue() {
    //prevent underflow
    if (this.size === 0) {
      throw new Error("Queue underflow");
    }

    // remove element from front(Time O(n) space(1))
    this.arr = shift(this.arr, --this.size);
    return this.arr;
  }

  getFront() {
    //prevent underflow
    if (this.rear === 0) {
      console.error("Queue underflow, empty queue");
      return -1
    }
    //element at front (Time O(1) space O(1))
    return this.arr[this.front];
  }
  getRear() {
    //prevent underflow
    if (this.rear === 0) {
      console.error("Queue underflow, empty queue");
      return -1
    }
    //element at front (Time O(1) space O(1))
    return this.arr[this.front + this.size - 1];
  }

  _size() {
    return this.size;
  }

  isFull() {
    return this.size === this.cap - 1;
  }
  isEmpty() {
    return this.size === 0;
  }
}

function shift(arr, index) {
  //length of array
  let n = arr.length;
//   shiting all the elements that come after first element to the left
  for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }
  // elements deleted are replaced by 0 since this is a fixed array
  arr[index] = 0;
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
console.log("Size: " + q1._size());
console.log("Is queue empty: " + (q1.isEmpty() ? "Yes" : "No"));
console.log("Is queue full: " + (q1.isFull() ? "Yes" : "No"));
console.log("Dequeued: " + q1.dequeue());
console.log("Front: " + q1.getFront());
console.log("Rear: " + q1.getRear());
console.log("Size: " + q1._size());
