class Node {
    constructor(item) {
        this.data = item;
        this.left = this.right = null;
    }
}

let rootNode = new Node(2);
let secondNode = new Node(3);
let thirdNode = new Node(4);
let fourthNode = new Node(5);

rootNode.left = secondNode;
rootNode.right = thirdNode;
secondNode.left = fourthNode;