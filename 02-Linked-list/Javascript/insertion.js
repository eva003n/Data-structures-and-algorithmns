class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
let head = createNode(10);
head.next = createNode(20);
head.next.next = createNode(30);
head.next.next.next = createNode(40);

function createNode(data) {
  return new Node(data);
}
//new node at the beginning

function insertAtFront(head, newData = 5) {
  const newNode = createNode(newData);
  newNode.next = head;
  head = newNode;
  print(head);
}

function print(head) {
  while (head) {
    console.log(head.data);
    head = head.next;
  }
}
insertAtFront(head)

function insertAfter(head, key, newData) {
    let current = head;
    while(current) {
        if(current.data === key) {
            break;

        }
        current =  current.next;

    }
    if(!current) {
        console.log("Node Not Found")
        return head
    }''
    let newNode = createNode(newData);

    newNode.next = current.next;
    current.next = newNode;

    print(head)

}
insertAfter(head, 3)