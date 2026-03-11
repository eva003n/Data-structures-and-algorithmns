class Queue {
    constructor(cap) {
        // storage
        this.arr = new Array(cap)
        // size of queue
        this.size = 0
        // rear pointer to determine the next available space to insert element
        this.rear = 0 
        // front pointer to keep tack of the next element added to due
        this.front = 0
        // maximum size
        this.capacity = cap
    }

    enqueue(data) {
        //prevent queue overflow
        if(this.rear === this.cap - 1) {
            throw new Error("Queue overflow")
        }
        // insert element at rear/back of queue
        this.arr[this.rear++] = data
        
        // update size
        this.size++
    }

    dequeue() {
        //prevent underflow
        if(this.rear === 0) {
            throw new Error("Queue underflow");
        }

        // remove element from front 
        this.arr = shift(this.arr)

        // update front pointer
        // this.front++

        this.size--
        return this.arr
    }

    peek() {
                //prevent underflow
        if(this.rear === 0) {
            throw new Error("Queue underflow");
        }
        return this.arr[this.front]
    }

    _size() {
        return this.size
    }

    isFull() {
        return this.rear === this.cap - 1
    }
    isEmpty() {
        return this.rear === 0
    }
}

function shift(arr) {
    //length of array
    let n = arr.length
    let i
    for( i = 1; i < n; i++) {
        arr[i - 1] = arr[i]
    }
    // elements deleted are replaced by 0 since this is a fixed array
    arr[--n] = 0;
    return arr
}

let q1 = new Queue(4)
q1.enqueue(10)
q1.enqueue(20)
q1.enqueue(30)
q1.enqueue(40)

console.log("Dequeued: " + q1.dequeue())
console.log("Peek: " + q1.peek())
console.log("Size: " + q1._size())
console.log("Is full: " + q1.isFull())
console.log("Is empty: " + q1.isEmpty())
console.log("Dequeued: " + q1.dequeue());
console.log("Peek: " + q1.peek());
