class HashNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  #table;
  #bucketsCount;
  constructor(buckets) {
    this.#bucketsCount = buckets;
    this.#table = new Array(buckets).fill(null);
  }

  insert(key, value) {
    let index = this.getHash(key);
    const temp = new HashNode(key, value);

    // when the index slot is empty
    if (this.#table[index] == null) {
      return this.#table[index] = temp;
    }
    // when slot is occupied continuously probe the index to find empty slot
    while (this.#table[index] !== null) {
        console.log("probing")
      index = (index + 1) % this.#bucketsCount;
    }

    // assign value at empty slot
    this.#table[index] = temp;
  }

  get(key) {
    let index = this.getHash(key);

    // when empty
    if (this.#table[index] === null) return -1;
    // when key matches return its valu
    if (this.#table[index].key === key) return this.#table[index].value;
    // linear probe until u find natching ket
    while (this.#table[index].key !== key ) {
      index = (index + 1) % this.#bucketsCount;
    }
    // if key is found after probing
    if (this.#table[index].key === key) return this.#table[index].value;
    // when key doesn't exists
    return -1;
  }

  delete(key) {
    let index = this.getHash(key);

    // when empty
    if (this.#table[index] === null) return false;

    if (this.#table[index].key === key) {
      this.#table[index] = { key: -1, value: -1 };
      return true;
    }
    // linear probe
    while (this.#table[index].key !== key) {
      index = (index + 1) % this.#bucketsCount;
    }
    if (this.#table[index].key === key) {
      this.#table[index] = { key: -1, value: -1 };
      return true;
    }
    // not found
    return false;
  }

  getHash(key) {
    return key % this.bucketsCount;
  }

  getTable() {
    console.log(this.#table)
  }
}

const hashtable = new HashTable(4)
const list = [[1, 2], [3, 4], [5, 6]]
hashtable.insert(10, 20)
hashtable.insert(10, 20)
hashtable.insert(10, 20)
hashtable.insert(10, 20)
// list.forEach((a, b) => hashtable.insert(a, b))

hashtable.getTable()