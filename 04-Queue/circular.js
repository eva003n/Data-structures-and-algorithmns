class Queue {
  constructor(capacity) {
    // storage
    this.arr = new Array(capacity);
    // index of front element
    this.front = -1;
    // current size of queue
    this.size = 0;
    // index of rear 
    this.rear = -1
    // maximum size of queue
    this.capacity = capacity;
  }

  // insert element at rear
  enqueue(element) {
    // prevent overflow
    if (this.isFull()) {
      throw new Error("Queue overflow");
    }

    // insert element at rear = (front + 1) % capacity ensures circular behavior
   
    if(this.isEmpty()) this.front = 0
    
    this.rear = (this.front + 1) % this.capacity;
    
    this.arr[this.rear] = element;
  }

  // remove and return front element
  dequeue() {
    //prevent undeflow
    if (this.isEmpty()) {
      throw new Error("Queue underflow");
    }
    let value = this.arr[this.front];
    // move front forward by circular movement
    if(this.front === this.rear) return this.front = thie.rear = -1
    
    this.front = (this.front + 1)  % this.capacity
    return value
  }

  getFront() {
    //when queue is empty
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return -1;
    }

    return this.arr[this.front];
  }

  getRear() {
    //when queue is empty
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return -1;
    }

    
    return this.arr[this.rear]
  }
  
  isFull(){
      return this.front == (this.rear + 1) % this.capacity
  }
  
  isEmpty() {
      return this.front == -1
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
