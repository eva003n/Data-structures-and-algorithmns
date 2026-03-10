class Stack {
  constructor(size) {
    // an array to store elements(fixed size stack)
    this.arr = new Array(size);
    // represent the last index
    this.top = -1; // -1 since stack is initially empty
    // maximum size of stack
    this.size = size;
  }

  push(element) {
    // prevent stack overflow
    if (this.top === this.size - 1) {
      throw new Error("Stack overflow");
    }
    this.arr[++this.top] = element;
  }

   pop(element) {
    // prevent stack underflow
    if (this.top == -1) {
      throw new Error("Stack underflow");
    }

    // removes the last element and return it
    return this.arr[this.top--];
  }

  peek() {
    // check if empty
    if (this.top == -1) {
      console.log("Stack is empty");
      return -1
    }
    return this.arr[this.top]
  }

  isEmpty() {
    return this.top == -1
  }

  isFull() {
    return this.top == this.size - 1
  }

}

let s1 = new Stack(4);
s1.push(10)
s1.push(20)
s1.push(30)
s1.push(40)

console.log("Popped: " + s1.pop())

console.log("Top element: " + s1.peek())

// the ternary operator is enclosed in brackets so that it takes precedence over addition to avoid unintended results
console.log("Is stack full: " + (s1.isFull()? "Yes": "No"))
console.log("Is stack empty: " + (s1.isEmpty() ? "Yes" : "No"));


