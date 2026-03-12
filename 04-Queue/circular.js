class Queue {
  constructor(capacity) {
    // storage
    this.arr = new Array(capacity);
    // index of front element
    this.front = 0;
    // current size of queue
    this.size = 0;
    // maximum size of queue
    this.capacity = capacity;
  }

  // insert element at rear
  enqueue(element) {
    // prevent overflow
    if (this.size === this.capacity - 1) {
      throw new Error("Queue overflow");
    }

    // insert element at rear = (front + size) % capacity ensures circular behavior
    let rear = (this.front + this.size++) % this.capacity;
    this.arr[rear] = element;
  }

  // remove and return front element
  dequeue() {
    //prevent undeflow
    if (this.size === 0) {
      throw new Error("Queue underflow");
    }
    let front = this.arr[this.front];
    // move front forward by circular movement
    this.front = (this.front + 1) % this.capacity;
    // update the size
    this.size--;

    return this.arr[front];
  }

  getFront() {
    //when queue is empty
    if (this.size === 0) {
      console.log("Queue is empty");
      return -1;
    }

    return this.arr[this.front];
  }

  getRear() {
    //when queue is empty
    if (this.size === 0) {
      console.log("Queue is empty");
      return -1;
    }

    let rear = (this.front + this.size - 1) % this.capacity
    return this.arr[rear]
  }
}

let q1 = new Queue()
q1.enqueue(10)
q1.enqueue(20)
q1.enqueue(30);
q1.enqueue(40)

console.log(`Front: ${q1.getFront()}`, `Rear: ${q1.getRear()}`)
q1.dequeue()
console.log(`Front: ${q1.getFront()}`, `Rear: ${q1.getRear()}`);
q1.dequeue()
console.log(`Front: ${q1.getFront()}`, `Rear: ${q1.getRear()}`);
//helli from dcoder