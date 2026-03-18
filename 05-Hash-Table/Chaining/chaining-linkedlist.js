class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class Hash {
  #bucketsCount;
  #table;
  constructor(buckets) {
    this.#bucketsCount = buckets;
    // each lement is a head of a particular linked list
    this.#table = new Array(buckets).fill(null);
  }

  set(key, value) {
    const index = this.getHashIndex(key);
    const newNode = new Node(key, value);

    // if linked list is empty
    if (this.#table[index] == null) {
      // this becomes the head
      this.#table[index] = newNode;
    } else {
      // insertion order doesn't matter so we cant insert at start so that Time complexity O(1) instead of O(n)
      let head = this.#table[index];
      // old head
      newNode.next = head;
      // update head to new node
      this.#table[index] = newNode;
    }
  }

  delete(key) {
    const index = this.getHashIndex(key);
    //traverse the list
    let curr = this.#table[index];
    let prev;
    while (curr !== null) {
      if (curr.key === key) break;

      // store previous node
      prev = curr;
      // move to next node
      curr = curr.next;
    }
    // matching node
    let matchingKey = curr.key;
    // skip matching ket
    prev.next = curr.next;

    return matchingKey.key;
  }

  get(key) {
    const index = this.getHashIndex(key);
    let curr = this.#table[index];

    while (curr !== null) {
      if (curr.key == key) return curr.value;
      curr = curr.next;
    }
    // when not found
    return null;
  }
  display() {
    let output = "";
    for (let i = 0; i < this.#bucketsCount; i++) {
      output += i.toString();
      // points to the head of the linked list
      let curr = this.#table[i];
      // traverse linked list
      while (curr !== null) {
        output += " -> " + curr.key;
        // move to next
        curr = curr.next;
      }
      // after traversing each bucket add a new line
      output += "\n";
    }
    console.log(output);
  }

  getHashIndex(key) {
    return key % this.#bucketsCount;
  }
}

const hash = new Hash(4);

// const list = [10, 20, 30, 40, 50];
const list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130];

list.forEach((element) => hash.set(element, element));
hash.display();
console.log("Deleted: " + hash.delete(60));
hash.display();
console.log("Get 60: " + hash.get(60))
