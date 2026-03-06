class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  static addNode(data) {
    return new Node(data);
  }

  static printList(head) {
    let currNode = head;
    while (currNode !== null) {
      console.log(currNode.data);
      currNode = currNode.next;
    }
  }
}

const head = Node.addNode(10);
head.next = Node.addNode(4);
head.next.next = Node.addNode(5);
head.next.next.next = Node.addNode(3);
head.next.next.next.next = Node.addNode(6);


// Time complexity O(n) space complexity O(1)
function findMiddleNodeBruteForce(head) {
  let currNode = head;

  if (head === null) return null;
  // when only one node exists
  if (head.next === null) return head.data;

  let length = 0;
  while (currNode !== null) {
    length++;
    currNode = currNode.next;
  }

  const middleNodePos = Math.floor(length / 2);
  // start at head
  currNode = head;
  for (let i = 0; i < middleNodePos; i++) {
    currNode = currNode.next;
  }

  return currNode.data;
}

console.log(findMiddleNodeBruteForce(head));

// hare and tortoise algorithm
/**
 * Initialize both slow and fast pointer to the head of linked list
 * With each iteration move slow one step and fast pointer two steps forward
 * When first pointer reaches last node slow pointer will be in middle
 * In even lists the middle node is usually second middle
 */
// Time complexity O(n) space complexity O(1)

function findMiddleNode(head) {
  if (head === null) return null;
  // when only one node exists
  if (head.next === null) return head.data;

  // initialize slow and fast pointer to head
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    // move two steps forward
    fast = fast.next.next;

    // slow moves one step forward
    slow = slow.next;
  }

  return slow.data;
}

console.log(findMiddleNode(head));
