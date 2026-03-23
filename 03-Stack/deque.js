class Dequeue {
    constructor() {
        this.items = [];

    }

    addFront(value) {
        this.items.unshift(value)
    }

    addRear(value) {
         this.items.push(value)
         return value
    }

    removeFront() {
        return this.items.shift()

    }
    removeRear() {
        return this.items.pop()
    }

    peekRear() {
        return this.items[this.items.length - 1]
    }
}

class Stack {
    constructor() {
        this.dequeue = new Dequeue()
    }
    push(value) {
        return this.dequeue.addRear(value)
    }
    pop() {
        if(this.isEmpty()) return console.log("Stack is empty")
        return this.dequeue.removeRear()
    }

    peek() {
        return this.dequeue.peekRear()
    }

    isEmpty() {
        return this.dequeue.items.length == 0
    }
}

const s1 = new Stack()

s1.push(10)
s1.push(20)
s1.push(30)
s1.push(40)

console.log("Popped: " + s1.pop())
console.log("Pushed: " + s1.push(100))
console.log("Peek: " + s1.peek())
