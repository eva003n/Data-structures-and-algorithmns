import { findMiddleNode } from "./middle.js";

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

let head = Node.addNode(10);
head.next = Node.addNode(4);
head.next.next = Node.addNode(5);
head.next.next.next = Node.addNode(3);
// head.next.next.next.next = Node.addNode(6);

//space is O(n) time complexity is O(n)

function modifyBruteForce(head) {
  let currNode = head;
  let arr = [];

  // when list is empty
  if (head === null) return null;
  //when hlist has a single node
  if (head.next === null) return head;
  // convert linked list into array for easier map out of the last element
  while (currNode !== null) {
    arr.push(currNode.data);
    currNode = currNode.next;
  }

  // use to pointer pattern to modify first half
  let left = 0,
    right = arr.length - 1,
    sub,
    temp;
  for (let i = 0; left < right; i++) {
    sub = arr[right] - arr[left];
    temp = arr[left];

    arr[left] = sub;
    arr[right] = temp;

    //update pointers to move inwards
    left++;
    right--;
  }

  //convert back to a list
  currNode = head;
  for (let i = 0; currNode !== null; i++) {
    currNode.data = arr[i];
    currNode = currNode.next;
  }

  return head;
}

console.log(modifyBruteForce(head));

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

  return slow;
}

function reverse(head) {
  let prev = null;
  let currNode = head;
  let next = null;

  while(currNode !== null) {
    next = currNode.next;

    currNode.next = prev;
    prev = currNode;

    currNode = next
  }

  return prev;

}

function modify(head) {
  let currNode; 
  let middleNode = findMiddleNode(head)
  // second half
  let reversedList = middleNode.next

  // split the list into two (first half and second)
  middleNode.next = null;

  // reverse the second half
  reversedList = reverse(reversedList)

  let curr1 = head;
  curr2 = reversedList

  // traverse both first and second half modifying their values
  while(curr1 !== null) {
    let x = curr1.data
    curr1.data = curr2.data - x;
    curr2.data = x;

    // move to next element
    curr1 = curr1.next;
    curr2 = curr2.next;

  }
  

  


}

