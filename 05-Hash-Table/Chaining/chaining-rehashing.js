class Hash {
  #bucketsCount;
  #size;
  #table;
  constructor(buckets) {
    this.#bucketsCount = buckets;

    // no of elements in hash tavle
    this.#size = 0;
    // create dynamic table
    this.#table = Array.from({ length: buckets }).map(() => []);
  }

  // insert key
  insertKey(key,) {
    // rehash if needed
    while(this.getLoadfactor() > 0.75) {
     this.rehash()
    }
    // map key to index
    const index = this.getHashIndex(key);
    this.#table[index].push(key);

    // update size
    this.#size++
  }

  // delete key
  removeKey(key) {
    const index = this.getHashIndex(key);
    let removedKey;
    const position = this.#table[index].indexOf(key);
    if (position !== -1) {
      removedKey = this.#table[index].splice(position, 1);
      // update size
      this.#size--
    }
    return removedKey[0];
  }

  display() {
    let output = "";
    for (let i = 0; i < this.#table.length; i++) {
      output += i.toString();
      for (let key of this.#table[i]) {
        output += " -> " + key;
      }
      output += "\n"
    }
    console.log(output);
  }

  // hash key to index
  getHashIndex(key) {
    return key % this.#table.length;
  }

  // load factor
  getLoadfactor() {
    // load factor is total no of elements / size of hash table(n/m)
    return this.#size / this.#bucketsCount;
  }

  rehash() {
    const oldTable = this.#table;
    //double the size of old table
    this.#bucketsCount *= 2;
    this.#table = Array.from({ length: this.#bucketsCount }).map(() => []);

    // update the size of new array
    this.#size = 0
    // redistribute the keys of old table to new table
    for(let bucket of oldTable) {
        for(let key of bucket) {
            this.insertKey(key)
        }
    }
    
  }

  getTable() {
    console.log(this.#table);
  }
}

const hash = new Hash(4);

// const list = [10, 20, 30, 40, 50];
const list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130];

list.forEach((element) => hash.insertKey(element));

console.log("____ Hash table ____");
hash.display();
// console.log("Removed: " + hash.removeKey(40));
console.log("____ Hash table ____");
hash.display();