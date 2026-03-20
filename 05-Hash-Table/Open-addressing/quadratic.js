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

  constructor(buckets = 7) {
    this.#bucketsCount = buckets;
    this.#table = new Array(this.#bucketsCount);
  }

  getHash(key) {
    return key % this.#bucketsCount;
  }
  set(key, value) {
    let index = this.getHash(key);
    let i = 1;

    // only probe when(slot is occupied, not deleted and key to be inserted doesn't exists)
    while (
      this.#table[index] !== undefined &&
      this.#table[index] !== DELETED &&
      this.#table[index].key !== key
    ) {
      // quadratic probing
      index = (index + i ** 2) % this.#bucketsCount;
      i++;

      if (i >= this.#bucketsCount) break;
    }

    this.#table[index] = new HashNode(key, value);
  }
  get(key) {
    let index = this.getHash(key);
    let i = 1;

    while (this.#table[index] !== undefined && this.#table[index] !== DELETED) {
      if (this.#table[index].key === key) {
        return this.#table[index].value;
      }

      index = (index + i ** 2) % this.#bucketsCount;
      i++;
      if (i >= this.#bucketsCount) break;
    }

    // not found
    return -1
  }
  delete(key) {
    let index = this.getHash(key);
    let i = 1;

    while (this.#table[index] !== undefined && this.#table[index] !== DELETED) {
      if (this.#table[index].key === key) {
        // delete key
        this.#table[index] = DELETED;
      }
      index = (index + i ** 2) % this.#bucketsCount;
      i++;
      if (i >= this.#bucketsCount) break;
    }

    // not found
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
console.log("Get key 30: " + hashTable.get(30));
hashTable.set(90, 100);
hashTable.getTable();
