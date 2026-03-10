class Node {
static size = 0
static head
    constructor(data) {
        this.data = data;
        this.prev = null;

        Node.size++;
        Node.head = this

    }

    

     addNode(data) {
        // this.size++;
        return new Node(data)
    }
}

class Stack extends Node {
    constructor(data) {
        super(data)
        // serves as the head of linked list
        this.top = super.head
    }
    push(element) {
        let oldHead = this.top
        // new head
         this.top = this.addNode(element);
         // new heads next point to old head
         this.top.prev = oldHead
    }
}
let s1 = new Stack(10)
//s1.push(10)
s1.push(20)
s1.push(30)
s1.push(40)
console.log(s1.top.prev)

// while(s1.top !== null) {
// console.log(s1.top.data);
// s1 = s1.top.prev

// }

