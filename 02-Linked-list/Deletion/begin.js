class Node {

constructor(data) {
    this.data = data
    this.next = null
}


    static addNode(data) {
        return new Node(data)
    }

    static deleteAtStart(head) {
        //check qif list is empty
        if(head === null) return null

        // make the next node the new head
        let oldHead = head;
        //make the next node the head
        head = head.next

        //free memory occupied by old head
        oldHead = null

        // return new head
        return head

    }

    static printList(head) {
        let currNode = head;
        while(currNode !== null) {
            process.stdout.write(currNode.data.toString())

            if(currNode.next) process.stdout.write(`->`)
            currNode = currNode.next
        }
        console.log()

    }
}

let head = Node.addNode(10);
head.next = Node.addNode(20);
head.next.next = Node.addNode(30);
head.next.next.next = Node.addNode(40);

console.log("Before deletion")
Node.printList(head)
console.log("After deletion")
head = Node.deleteAtStart(head)
Node.printList(head);
