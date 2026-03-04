class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }

    static addNode(data) {
        return new Node(data)

    }

    static deleteAtEnd(head) {
        // when list is empty
        if(head === null) return null
        // hwen the head is the only node
        if(head.next === null) {
            //delte head 
            head = null
            return head
        }

        
        let currNode = head;

// traverse untile the second last element
        while(currNode.next.next !== null) {

            // move to next node
            currNode = currNode.next
        }
        // here the current node will be second last node
        let lastNode = currNode.next
        // make second last node the last node
        currNode.next = null;
        
        //free memory of the old last node
        lastNode = null;
        //return updated linked list
        return head;

    }
    static printList(head) {
        let currNode = head;
        while(currNode !== null) {
            process.stdout.write(currNode.data.toString())

            if(currNode.next) process.stdout.write("->")
            currNode = currNode.next; 
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
head = Node.deleteAtEnd(head);
Node.printList(head);