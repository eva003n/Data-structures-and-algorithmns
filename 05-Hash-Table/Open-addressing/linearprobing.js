const DELETED = Symbol("Deleted");

class HashNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  #table;
  #bucketsCount;
  constructor(buckets = 4) {
    this.#bucketsCount = buckets;
    this.#table = new Array(buckets);
  }

  insert(key, value) {
    let index = this.getHash(key);
    const temp = new HashNode(key, value);
    let startIndex = index;

    // when slot is occupied, not deleted and does not have the same key continuously probe
    while (
      this.#table[index] !== undefined &&
      this.#table[index] !== DELETED &&
      this.#table[index].key !== key
    ) {
      index = (index + 1) % this.#bucketsCount;
      // pevent infinite loop
      if (index === startIndex) break;
    }

    // assign value at empty slot
    this.#table[index] = temp;
  }

  get(key) {
    let index = this.getHash(key);
    let startIndex = index;

    // linear probe as long as slot is not empty
    while (this.#table[index] !== undefined) {
      // if key is found after probing
      if (this.#table[index] !== DELETED && this.#table[index].key === key) {
        return this.#table[index].value;
      }
      // probe index(when key is not found)
      index = (index + 1) % this.#bucketsCount;
      // prevent infinite loop(when done the index circles back to front)
      if (index === startIndex) break;
    }
    // when key doesn't exists
    return -1;
  }

  delete(key) {
    let index = this.getHash(key);
    let startIndex = index;

    // linear probe
    while (this.#table[index] !== undefined) {
      // simulate deletion]
      if (this.#table[index] !== DELETED && this.#table[index].key === key) {
        this.#table[index] = DELETED;
        return true;
      }
      index = (index + 1) % this.#bucketsCount;
      //prevent infinate loop
      if (index === startIndex) break;
    }
    // not found
    return false;
  }

  getHash(key) {
    return key % this.#bucketsCount;
  }

  getTable() {
    console.log(this.#table);
  }
}

const hashTable = new HashTable(4);
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

list.forEach(([a, b]) => hashTable.insert(a, b));
hashTable.delete(30);
console.log("Get key 30: " + hashTable.get(30));
hashTable.insert(90, 100);
hashTable.getTable();
