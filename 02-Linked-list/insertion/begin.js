class Node {
    data;
    next 

    constructor(data) {
        this.data = data;
        this.next = null
    }

    static insertAtTheBeginning(currentHead, data) {
        const newHead = new Node(data)

        newHead.next = currentHead
        return newHead

    }

    static printLinkedList(head) {
        let node = head;
        while (node !== null) {
          process.stdout.write(`${node.data}`);
          if (node.next) process.stdout.write(`--->`);

          node = node.next;
        }

        process.stdout.end();
        console.log();

    } 
}

let head = new Node(10)
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(50);


head = Node.insertAtTheBeginning(head, 100);
Node.printLinkedList(head)

