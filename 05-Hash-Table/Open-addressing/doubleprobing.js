const DELETED = Symbol("Deleted");
class HashNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  #bucketsCount;
  #table;
  #size;
  constructor(buckets = 7) {
    this.#bucketsCount = buckets;
    this.#table = new Array(buckets);
    this.#size = 0;
  }

  // first hashing function that generates index
  getHash1(key) {
    return key % this.#bucketsCount;
  }

  // Second hash (must not be zero)
  getHash2(key) {
    const r = this.#bucketsCount - 2; // prime less than buckets | size
    return r - this.getHash1(key);
  }

  set(key, value) {
    // prevent inserting when full
    if (this.#size === this.#bucketsCount) {
      console.log("Table is full");
      return;
    }
    let index = this.getHash1(key);
    const startIndex = index;
    let i = 0;
    // when slot is occupied, not deleted, and doesn't have the same key
    while (
      this.#table[index] !== undefined &&
      this.#table[index] !== DELETED &&
      this.#table[index].key !== key
    ) {
      // probe(double hashing)
      index = (index + i * this.getHash2(key)) % this.#size;
      //stop when we reach end of hashtable
      if (index === startIndex) break;
    }

    // insert data
    this.#table[index] = new HashNode(key, value);
    this.#size++;
  }

  get(key) {
    let index = this.getHash1(key);
    const startIndex = index;
    let i = 0;
    // when slot is occupied, not deleted, and doesn't have the same key
    while (this.#table[index] !== undefined && this.#table[index] !== DELETED) {
      if (this.#table[index].key === key) return this.#table[index].value;
      // probe(double hashing)
      index = (index + i * this.getHash2(key)) % this.#size;
      //stop when we reach end of hashtable
      if (index === startIndex) break;
    }

    // not found
    console.log("key doesn't exists");
    return -1;
  }

  delete(key) {
    let index = this.getHash1(key);
    const startIndex = index;
    let i = 0;
    // when slot is occupied and is not already deleted
    while (this.#table[index] !== undefined && this.#table[index] !== DELETED) {
      if (this.#table[index].key === key) {
        this.#table[index] = DELETED;
        this.#size--;
      }
      // probe(double hashing)
      index = (index + i * this.getHash2(key)) % this.#size;
      //stop when we reach end of hashtable
      if (index === startIndex) break;
    }

    // not found
    console.log("key doesn't exists");
    return -1;
  }

  getTable() {
    console.log(this.#table);
  }
}

const hashTable = new HashTable(7);
const list = [
  [10, 20],
  [30, 40],
  [50, 60],
  [70, 80],
];
// hashtable.insert(10, 20);
// hashtable.insert(30, 40);
// hashtable.insert(50, 60);
// hashtable.insert(70, 80);

list.forEach(([a, b]) => hashTable.set(a, b));
hashTable.delete(30);
// console.log("Get key 30: " + hashTable.get(30));
hashTable.set(90, 100);
hashTable.set(110, 120);
hashTable.set(130, 140);
hashTable.set(150, 160);
hashTable.set(200, 300);
hashTable.getTable();
