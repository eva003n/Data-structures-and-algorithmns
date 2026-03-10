class Stack {
  constructor() {
    // an array to store elements(fixed size stack)
    this.arr = [];
  }

  push(element) {
    // update array size

    this.arr.push(element);
  }

  pop() {
    // prevent stack underflow
    if (this.arr.length === 0) {
      throw new Error("Stack underflow");
    }

    // removes the last element and return it
    return this.arr.pop();
  }

  peek() {
    // check if empty
    if (this.arr.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.arr[this.arr.length - 1];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

size() {
    return this.arr.length;
  }
}

let s1 = new Stack(4);
s1.push(10);
s1.push(20);
s1.push(30);
s1.push(40);

console.log(s1.arr)

console.log("Popped: " + s1.pop());

console.log("Top element: " + s1.peek());
console.log("Stack size: " + s1.size());

// the ternary operator is enclosed in brackets so that it takes precedence over addition to avoid unintended results
console.log("Is stack empty: " + (s1.isEmpty() ? "Yes" : "No"));
