class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  static addNode(data) {
    return new Node(data);
  }

  static searchKey(head, key) {
    // if list is empty the key cannot exists
    if (head === null) return false;
    // traverse list until u find a matching key then exit
    let currNode = head;

    while (currNode !== null) {
      if (currNode.data === key) {
        return true;
      }

      currNode = currNode.next;
    }
    // not found
    return false;
  }
}

let head = Node.addNode(10);
head.next = Node.addNode(20);
head.next.next = Node.addNode(30);
head.next.next.next = Node.addNode(40);

console.log(Node.searchKey(head, 100));
console.log(Node.searchKey(null, 10));
console.log(Node.searchKey(head, 20));
