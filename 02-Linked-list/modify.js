class Node {
  constructor(data){
    this.data=data;
    this.next=null
  }
  
  static addNode(data){
    return new Node(data);
  }
  
  static printList(head){
    let currNode = head;
    while(currNode !== null){
      console.log(currNode.data)
      currNode=currNode.next
    }
  }
}

let head = Node.addNode(10)
head.next = Node.addNode(4)
head.next.next = Node.addNode(5);
head.next.next.next = Node.addNode(3)
head.next.next.next.next = Node.addNode(6);

//space is O(n) time complexity is O(n)

function modifyfirsthalf(head) {
  let currNode = head;
  let arr = []
  
  // when list is empty
  if(head === null) return null
  //when hlist has a single node
   if(head.next === null) return head
  // convert linked list into array for easier map out of the last element
  while(currNode !== null){
    arr.push(currNode.data)
    currNode = currNode.next
  }
  
  // use to pointer pattern to modify first half
  let left = 0, right = arr.length -1, sub, temp;
  for(let i = 0; left < right; i++){
    sub = arr[right] - arr[left]
    temp = arr[left];
    
    arr[left ] = sub;
    arr[right] = temp
    
    //update pointers to move inwards
    left++
    right--;
    
  }
  
  //convert back to a list
  currNode = head;
  for(let i = 0; currNode !== null; i++) {
    currNode.data = arr[i];
    currNode = currNode.next;
    
  }
  
  return head;
  
}



console.log(modifyfirsthalf(head));

function findMiddle(head) {
  let currNode = head
  
  if(head === null) return null
  
  let length = 0
  while(currNode !== null){
    length++;
    currNode = currNode.next
  }
  
  const middleNodePos = Math.floor(length / 2) ;
  console.log(middleNodePos)
  
  for(let i = 0; i <= middleNodePos; i++){
    currNode = currNode.next
    
  }
  
  return currNode;
  
  let prev = currNode
  let lastNode = currNode.next
  lastNode.next = prev
  prev.next = null;
  
}

console.log(findMiddle(head))


